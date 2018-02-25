var mysql = require("mysql");
var inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "great_bay_db"
});

const app = {
  runInquiry: () => {
    inquirer
      .prompt({
        name: "bidOrPost",
        type: "rawlist",
        message: "Would you like to bid or post?",
        choices: ["POST", "BID"]
      })
      .then((answer) => {
        answer.bidOrPost.toUpperCase() === "POST"
          ? app.postItem()
          : app.bidItem();
      })
  },
  postItem: () => {
    console.log("postItem function to run here");
  },
  bidItem: () => {
    console.log("bidItem function to run here");
  },
  inquirerBid: () => {
    inquirer
      .prompt({

      })
  }
}

connection.connect((err) => {
  if(err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  app.runInquiry();
})

// inquirer: ask: post an item or bid?
// if post, gather post info, then run postItem()
// if bid, gather bid info, then run bidOnItem()

