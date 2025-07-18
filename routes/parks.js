const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { start, end } = req.body;

  // TODO: use Google Maps API and compare to parks list
  // For now, return placeholder
  res.json({
    parks: [
      { name: "Yosemite National Park" },
      { name: "Grand Canyon National Park" }
    ]
  });
});

module.exports = router;
