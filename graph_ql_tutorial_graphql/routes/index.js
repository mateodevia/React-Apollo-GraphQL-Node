var express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("../schema/schema");
var router = express.Router();

router.use(
  "/graphql",
  graphqlHTTP({
    schema: schema
  })
);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
