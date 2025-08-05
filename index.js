const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");

const PORT = 8000;
const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

connectDb();
app.get("/", (req, res) => {
  res.send("Server is running fine");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
