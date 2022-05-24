import sql from 'k6/x/sql';

// The second argument is a PostgreSQL connection string, e.g.
// postgres://myuser:mypass@127.0.0.1:5432/postgres?sslmode=disable
//db cred for irdr qa3 postgres.
// default.datasource.driver=org.postgresql.Driver
// default.datasource.url=jdbc:postgresql://192.168.14.51:5432/irdr
// default.datasource.user=paas
// default.datasource.password=paas@NSLHUB

const db = sql.open('postgres', 'paas:paas@NSLHUB@192.168.14.51:5432/postgres?sslmode=disable');

export function setup() {
  db.exec(`CREATE TABLE IF NOT EXISTS keyvalues (
    id SERIAL PRIMARY KEY,
    key varchar(50) NOT NULL,
    value varchar(50)
  )`);
}

export function teardown() {
  db.close();
}

export default function () {
  db.exec("INSERT INTO keyvalues (key, value) VALUES('plugin-name', 'k6-plugin-sql');");
  let results = sql.query(db, 'SELECT * FROM keyvalues WHERE key = $1;', 'plugin-name');
  for (const row of results) {
    console.log(`key: ${row.key}, value: ${row.value}`);
  }
}
