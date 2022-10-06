const express = require("express");
const morgan = require("morgan");
const http = require("http");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();

const dishRouter = require("./routers/dishRouter");

app.use("/dishes", dishRouter);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

/*app.get("/dishes/:dishID", (req, res, next) => {
  res.end(`Will send details of ${req.params.dishID} to you!`);
});

app.put("/dishes/:dishID", (req, res, next) => {
  res.write(`Updating the details of ${req.params.dishID} \n`);
  res.end(
    `Will update the dish ${req.body.name} with details ${req.body.description}`
  );
});

app.post("/dishes/:dishID", (req, res, next) => {
  res.statusCode = 403;
  res.end(`POST is not supported on /dishes/${req.params.dishID}`);
});

app.delete("/dishes/:dishID", (req, res, next) => {
  res.end(`Deleting dish: ${req.params.dishID}`);
});*/

app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
