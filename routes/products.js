const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");
const generateProducts = require("../handlers/generateProducts");
module.exports = router;

router.get("/products", (req, res) => {
  let {
    _quantity,
    _locale,
    _seed,
    _category_type,
    _taxes,
    _price_min,
    _price_max,
  } = req.query;
  _quantity = parseInt(_quantity) || 1;
  _price_min = parseFloat(_price_min) || 0.01;
  _price_max = parseFloat(_price_max) || 0xffff;
  _taxes = parseInt(_taxes) || 22;
  try {
    const data = generateProducts({
      _quantity,
      _locale,
      _seed,
      _category_type,
      _taxes,
      _price_min,
      _price_max,
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
