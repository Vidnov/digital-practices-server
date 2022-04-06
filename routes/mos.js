var express = require("express");
const request = require("request");
var convert = require("xml-js");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  request("https://www.mos.ru/rss", (err, resolve, html) => {
    if (err) {
      res.status(500).send(err);
    } else {
      var result1 = convert.xml2json(html, { compact: true, spaces: 4 });

      res.status(200).send(result1);
    }
  });
});

module.exports = router;
