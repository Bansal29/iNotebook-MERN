const connectToMongo = require("./db");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
var cors = require("cors");

dotenv.config();

app.use(cors());
//Available routes
connectToMongo();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook notes app listening on port ${port}`);
});
