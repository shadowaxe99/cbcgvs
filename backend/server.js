```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const aiRoutes = require('./routes/aiRoutes');
const nftRoutes = require('./routes/nftRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/elysium', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/nft', nftRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```