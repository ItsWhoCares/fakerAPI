const express = require("express");
const generateUsers = require("../handlers/generateUsers");

const router = express.Router();

// Define your routes here

module.exports = router;

router.get("/users", (req, res) => {
  let { _quantity, _locale, _seed, _gender } = req.query;
  _quantity = parseInt(_quantity) || 1;
  try {
    const data = generateUsers({
      _quantity,
      _locale,
      _seed,
      _gender,
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
