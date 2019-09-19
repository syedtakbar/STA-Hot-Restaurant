// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT =  process.env.PORT || 3500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [
  {    
    name: "sample name",
    phonenumber: "999-999-9999",
    numofpeople: "1",
    email: "test@gmail.com",
    uniqueid: 1    
  },   

  {    
    name: "sample name1",
    phonenumber: "999-999-9999",
    numofpeople: "1",
    email: "test@gmail.com",
    uniqueid: 1    
  },   

];

var waitlist = [
  {    
    name: "waiting item",
    phonenumber: "999-999-9999",
    numofpeople: "1",
    email: "test@gmail.com",
    uniqueid: 2   
  },   
  {    
    name: "waiting item1",
    phonenumber: "999-999-9999",
    numofpeople: "1",
    email: "test@gmail.com",
    uniqueid: 2   
  },   
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });


app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});


app.get("/api/tables/:table", function(req, res) {
  var chosen = req.params.table;
  console.log(chosen);

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].name) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});

app.get("/api/tables/:waitlistname", function(req, res) {
  var chosen = req.params.waitlistname;
  console.log(chosen);

  for (var i = 0; i < waitlist.length; i++) {
    if (chosen === waitlist[i].name) {
      return res.json(waitlist[i]);
    }
  }

  return res.json(false);
});


app.post("/api/tables", function(req, res) {

  if(tables.length < 5)    {
    tables.push(req.body);
    res.json(true);
  } else  {
    waitlist.push(req.body);
      res.json(false);
  }
});

app.post('/api/clear', function()   {
    tables   = [];
    waitlist = [];

    console.log(tables);
    console.log(waitlist);
});


// =============================================================
app.listen(PORT, function() {  
  console.log("App listening on: http://localhost:" + PORT);
});
