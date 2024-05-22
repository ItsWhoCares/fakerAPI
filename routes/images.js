const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");
const generateImages = require("../handlers/generateImages");
module.exports = router;

router.get("/images", (req, res) => {
  let { _quantity, _locale, _seed, _width, _height, _type } = req.query;
  _quantity = parseInt(_quantity) || 1;
  _width = parseInt(_width) || 640;
  _height = parseInt(_height) || 480;
  try {
    const data = generateImages({
      _quantity,
      _locale,
      _seed,
      _width,
      _height,
      _type,
    });
    res.json({
      status: "OK",
      code: 200,
      total: _quantity,
      data,
    });
  } catch (err) {
    res.json({
      status: "ERROR",
      code: 500,
      message: err.message,
    });
  }
});
