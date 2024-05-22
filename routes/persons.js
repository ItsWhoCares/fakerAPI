const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");
const generatePersons = require("../handlers/generatePersons");
module.exports = router;

router.get("/persons", (req, res) => {
  let { _quantity, _locale, _seed, _gender, _birthday_start, _birthday_end } =
    req.query;
  _quantity = parseInt(_quantity) || 1;
  // const locale = _locale || "en_US";
  // const seed = _seed || Date.now() ^ (Math.random() * 0x100000000);
  try {
    const data = generatePersons({
      _quantity,
      _locale,
      _seed,
      _gender,
      _birthday_start,
      _birthday_end,
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
