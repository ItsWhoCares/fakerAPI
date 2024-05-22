const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");
const generateCompanies = require("../handlers/generateCompanies");

module.exports = router;
router.get("/companies", (req, res) => {
  let { _quantity, _locale, _seed, _gender, _birthday_start, _birthday_end } =
    req.query;
  _quantity = parseInt(_quantity) || 1;

  try {
    const data = generateCompanies({
      _quantity,
      _seed,
      _locale,
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
