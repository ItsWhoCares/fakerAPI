const express = require("express");
const generateTexts = require("../handlers/generateTexts");

const router = express.Router();

// Define your routes here

module.exports = router;

router.get("/texts", (req, res) => {
  let { _quantity, _locale, _seed, _characters } = req.query;
  _quantity = parseInt(_quantity) || 1;
  try {
    const data = generateTexts({
      _quantity,
      _locale,
      _seed,
      _characters,
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
