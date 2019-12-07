var express = require("express");
var MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();
var router = express.Router();

router.get("/libros", function(req, res) {
  myMongoLib
    .getLibros()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/libro/:libroId", function(req, res) {
  myMongoLib
    .getLibro(req.params.libroId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/autores", function(req, res) {
  myMongoLib
    .getAutores()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/autor/:autorId", function(req, res) {
  myMongoLib
    .getAutor(req.params.autorId)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
