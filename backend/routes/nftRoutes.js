```javascript
const express = require('express');
const router = express.Router();
const nftController = require('../controllers/nftController');

// Route to mint NFT
router.post('/mint', nftController.mintNFT);

// Route to simulate trading
router.post('/trade', nftController.tradeNFT);

// Route to get NFT details
router.get('/:id', nftController.getNFTDetails);

module.exports = router;
```