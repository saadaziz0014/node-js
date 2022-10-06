const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the leaders to you!");
  })
  .post((req, res, next) => {
    res.end(
      `Will add the leader ${req.body.name} with details ${req.body.description} `
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT is not suported on /leaders");
  })
  .delete((req, res, next) => {
    res.end("Deleting all the leaders");
  });
leaderRouter
  .route("/:leaderID")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send details of ${req.params.leaderID} to you!`);
  })
  .put((req, res, next) => {
    res.write(`Updating the details of ${req.params.leaderID} \n`);
    res.end(
      `Will update the leader ${req.body.name} with details ${req.body.description}`
    );
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST is not supported on /leaders/${req.params.leaderID}`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting leader: ${req.params.leaderID}`);
  });

module.exports = leaderRouter;
