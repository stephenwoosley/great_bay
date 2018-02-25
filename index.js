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
  currentItems: [],
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
    app.inquirerBid();
  },
  inquirerBid: () => {
    inquirer
      .prompt([
        {
          name: "bidChoice",
          type: "rawlist",
          message: "Which item would you like to bid on?",
          choices: app.currentItems
        },
        {
          name: "bidAmount",
          type: "input",
          message: "How much would you like to bid?"
        }
      ])
      .then((answer) => {
        //app.placeBid(answer.bidChoice);
      })
  },
  placeBid: (item) => {
    connection.query("SELECT * FROM products WHERE item_name")
  },
  fillCurrentItems: () => {
    connection.query("SELECT * FROM products", (err, results) => {
      if (err) throw err;
      for (var i = 0; i < results.length; i++) {
        app.currentItems.push(results[i].item_name);
      }
      //console.log(`currentItems is ${app.currentItems}`);
    })
    // add name of item to currentItems array
  }
}

let currentItems = [];

connection.connect((err) => {
  if(err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  app.fillCurrentItems();
  app.runInquiry();
})

// inquirer: ask: post an item or bid?
// if post, gather post info, then run postItem()
// if bid, gather bid info, then run bidOnItem()

