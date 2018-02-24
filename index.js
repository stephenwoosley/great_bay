const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "great_bay_db"
});

connection.connect((err) => {
  if(err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
})

// inquirer: ask: post an item or bid?
// if post, gather post info, then run postItem()
// if bid, gather bid info, then run bidOnItem()