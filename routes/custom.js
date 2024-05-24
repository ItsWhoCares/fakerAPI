const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");
const generateCustom = require("../handlers/generateCustom");
module.exports = router;

router.get("/custom", (req, res) => {
  let { _quantity, _locale, _seed, ...customFields } = req.query;
  _quantity = parseInt(_quantity) || 1;
  try {
    const data = generateCustom({
      _quantity,
      _locale,
      _seed,
      customFields,
    });
    if (data === false) {
      res.json({
        status: "ERROR",
        code: 400,
        message: "Invalid custom field",
      });
    }
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
