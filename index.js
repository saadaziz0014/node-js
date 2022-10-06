const express = require("express");
const morgan = require("morgan");
const http = require("http");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();

const dishRouter = require("./routers/dishRouter");
const leaderRouter = require("./routers/leaderRouter");
const promotionRouter = require("./routers/promotionRouter");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.use("/dishes", dishRouter);
app.use("/promotions", promotionRouter);
app.use("/leaders", leaderRouter);

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
