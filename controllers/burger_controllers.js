var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/", function(req, res) {
  console.log(' WHAT IS OUR REQ BODY???', req.body);
  burger.create([
    "burger", "devoured"
  ], [
    req.body.devoured, req.body
  ], function() {
    res.redirect("/");
  });
});
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function() {
    res.redirect("/");
  });
});
// Export routes for server.js to use.
module.exports = router;
