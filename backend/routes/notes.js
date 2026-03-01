const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: "Notes route working" });
});

module.exports = router;