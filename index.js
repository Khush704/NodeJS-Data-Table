import bodyParser from "body-parser";
import express from "express";
import database from "./configs/database.js";
import studentRounter from "./routes/StudentRoutes.js";

const port = 8081;

const app = express();
app.use(bodyParser.urlencoded());


app.use('/',studentRounter)

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Start");
  }
});
