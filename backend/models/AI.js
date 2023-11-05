```javascript
const mongoose = require('mongoose');

const AISchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  capabilities: {
    type: [String],
    required: true
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  persona: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NFT'
  }
});

module.exports = mongoose.model('AI', AISchema);
```