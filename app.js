//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

console.log(date);

const items = ["Buy Food","Cook Food","Eat Food"];
const workItems = []; // post ile oluşturulacak olan itemın , get içerisinde tanımsız olmaması için ve her seferinde değişmemesi için array oluşturuldu

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {

  let day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});

});
app.post("/", (req,res)=>{
  let item = req.body.newItem;
  // Button value'suna göre array'e pushlayacak
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
  }

 // post edildiğinde item'i kaydedip "/" a geri gönder ve get requesti çağırır.
  res.redirect("/");

});


app.get("/work",(req,res)=>{
  res.render("list", {listTitle: "Work", newListItems: workItems});
});

app.get("/about",(req,res)=>{
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
