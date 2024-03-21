const connectToMongo = require("./db");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

app.use(express.json());
var cors = require("cors");

dotenv.config();

app.use(cors());
//Available routes
connectToMongo();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const port = process.env.PORT || 7000;
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in Running Serve ${port}: ` + err);
  }
  console.log(`iNoteBook notes app listening on port ${port}`);
});
