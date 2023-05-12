const express = require("express");
const dataBase = require("./database/database").dbConnection;
const Notes = require("./model/notes").Notes;
const cors = require("cors");

const app = express();

dataBase();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(req.body);
});

app.get("/notes", async (req, res) => {
  const data = await Notes.find();
  res.json(data);
});

app.post("/notes", async (req, res) => {
  try {
    const notes = new Notes(req.body);
    const data = await notes.save();
    console.log(data);
    res.status(201).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
});

app.listen("8080", () => console.log("server is running"));
