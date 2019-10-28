const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 9999;

// Import all router
const router = require("./router");

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("DB Connected!");
})

// integrate the imported js from router => `require("./router.js");`
app.use("/", router);


app.listen(PORT, function() {
  console.log("Server is running on Port : " + PORT);
});