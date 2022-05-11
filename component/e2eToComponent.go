package main

import (
	"fmt"
	"github.com/olekukonko/tablewriter"
	sm "github.com/puzpuzpuz/xsync"
	"github.com/rbretecher/go-postman-collection"
	"go.uber.org/atomic"
	"os"
	"path"
	"path/filepath"
	"strings"
)

const (
	root = "/Users/rverma/dev/platform_api_tests/collections"
)

type Test struct {
	method     string
	collection string
	name       string
	count      *atomic.Int32
}

func main() {
	modules := []string{"PAAS", "TF", "DSD", "B2C"}
	mmap := sm.NewMapOf[*sm.MapOf[Test]]()

	f, err := os.OpenFile("./apis.md", os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0755)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	table := tablewriter.NewWriter(f)
	table.SetHeader([]string{"Component", "Count", "Url", "Collection", "Test"})
	table.SetBorders(tablewriter.Border{Left: true, Top: false, Right: true, Bottom: false})
	table.SetCenterSeparator("|")
	table.SetAutoFormatHeaders(true)
	table.SetAutoMergeCells(false)
	table.SetAutoWrapText(false)

	var files []string

	for _, module := range modules {
		err := filepath.WalkDir(filepath.Join(root, module), func(path string, info os.DirEntry, err error) error {
			if !info.IsDir() {
				files = append(files, path)
			}
			return nil
		})

		if err != nil {
			panic(err)
		}
	}
	channel := make(chan string)
	for _, file := range files {
		go findPostmanTest(file, mmap, channel)
	}

	for i := 0; i < len(files); i++ {
		fmt.Printf("Processed: %s\n", <-channel)
	}

	var rows [][]string
	mmap.Range(func(k string, v *sm.MapOf[Test]) bool {
		v.Range(func(k1 string, v1 Test) bool {
			if v1.count.Load() > 2 {
				rows = append(rows, []string{k, v1.count.String(), v1.method + " " + k1, v1.collection, v1.name})
			}
			return true
		})
		return true
	})

	table.AppendBulk(rows)
	table.Render()
}

func findPostmanTest(filepath string, m *sm.MapOf[*sm.MapOf[Test]], channel chan string) {
	file, err := os.Open(filepath)
	if err != nil {
		panic(err)
	}
	defer file.Close()

	c, err := postman.ParseCollection(file)

	if err != nil {
		panic(err)
	}

	for _, items := range c.Items {
		for _, item := range items.Items {
			url := path.Join(item.Request.URL.Path...)
			var component string
			if strings.Contains(url, ".svg") || strings.Contains(url, ".json") {
				continue
			} else {
				split := strings.Split(url, "/")
				switch split[1] {
				case "realms":
					component = "Keycloak"
				case "api":
					component = "cdm"
				case "v1":
					component = "notification"
				case "import":
					component = "importexport"
				case "tenant":
					component = "dsd-bets-store"
				case "execute":
					component = "txn"
				default:
					component = split[1]
				}
			}
			apis, _ := m.LoadOrStore(component, sm.NewMapOf[Test]())
			if test, loaded := apis.LoadOrStore(url, NewTest(item.Name, c.Info.Name+"/"+items.Name, item.Request.Method)); loaded {
				test.count.Inc()
			}
			m.Store(component, apis)
		}
	}
	channel <- filepath
}

func NewTest(name string, collection string, method postman.Method) (t Test) {
	t.count = atomic.NewInt32(1)
	t.method = string(method)
	t.name = name
	t.collection = collection
	return t
}

//func trimText(input string) string {
//	if len(input) > maxFieldLength {
//		input = fmt.Sprintf("%s ...%s", input[:maxFieldLength-40], input[(len(input)-maxFieldLength+40):])
//	}
//	return input
//}
