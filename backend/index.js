const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectToMongo = require("./db");
const cors = require("cors");

app.use(express.json());

dotenv.config();

app.use(cors());
//Available routes
connectToMongo();

app.use("/", (req, res) => {
  res.status(200).send("hello from Aryan");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const port = process.env.PORT || 7000;
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in Running Serve ${port}: ` + err);
  }
  console.log(`iNoteBook notes app listening on port ${port}`);
});
