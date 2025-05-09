const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 'INV001', agency: 'DoD', amount: 32000 },
    { id: 'INV002', agency: 'NASA', amount: 88000 }
  ]);
});

module.exports = router;