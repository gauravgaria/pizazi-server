import express from "express";
import path from "path";
import errorHandler from "./src/middleware/errorHandler";
import routes from "./src/routes";
require("./src/config/db/connection");
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8000;

global.appRoot = path.resolve(__dirname); //productController delete image if error

//enable cors for testing client and server on localhost
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//for multi-part data
app.use(express.urlencoded({ extended: false }));

//json data received in express is disabled by default || express.json() --> enables it(to read json data)
app.use(express.json());

// routes  registeration
app.use("/api", routes);

app.use((req, res) => {
  res.status(404).send("<h1>404 Page not Found</h1>");
});
// errorHandler registeration always at the end of file
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
