var express = require("express");
const request = require("request");
var convert = require("xml-js");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  request("https://lenta.ru/rss/news", (err, resolve, html) => {
    var result1 = convert.xml2json(html, { compact: true, spaces: 4 });
    res.send(JSON.parse(result1));
  });
});

module.exports = router;
