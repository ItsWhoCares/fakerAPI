const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");
const generateCreditCards = require("../handlers/generateCreditCards");
module.exports = router;

router.get("/credit_cards", (req, res) => {
  let { _quantity = 1, _locale, _seed } = req.query;
  _quantity = parseInt(_quantity, 10);
  try {
    const data = generateCreditCards({
      _quantity,
      _locale,
      _seed,
    });
    res.json({
      status: "OK",
      code: 200,
      total: _quantity,
      data: data,
    });
  } catch (err) {
    res.json({
      status: "ERROR",
      code: 500,
      message: err.message,
    });
  }

  //   data.push(book);
});
