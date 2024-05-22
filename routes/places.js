const express = require("express");
const generatePlaces = require("../handlers/generatePlaces");
const router = express.Router();
module.exports = router;

router.get("/places", (req, res) => {
  let { _quantity, _locale, _seed } = req.query;
  _quantity = parseInt(_quantity) || 1;
  try {
    const data = generatePlaces({
      _quantity,
      _locale,
      _seed,
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
