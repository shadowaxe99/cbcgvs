```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  ownedAI: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AI'
  }],
  ownedNFT: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NFT'
  }]
});

module.exports = mongoose.model('User', UserSchema);
```