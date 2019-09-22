const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const items = require("./routes/api/items");

const app = express();

// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Mongo DB
const db = require("./config/key").mongoURL;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => console.log(err));

// Routes
app.use("/api/items", items);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started in " + PORT));
