```javascript
const mongoose = require('mongoose');

const NFTSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  attributes: {
    type: Map,
    of: String
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('NFT', NFTSchema);
```