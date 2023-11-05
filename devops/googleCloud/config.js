```javascript
const { Storage } = require('@google-cloud/storage');

const GOOGLE_CLOUD_PROJECT_ID = 'YOUR_PROJECT_ID'; // Replace with your project ID
const GOOGLE_CLOUD_KEYFILE = 'YOUR_KEYFILE'; // Replace with the path to the downloaded private key

const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE,
});

module.exports = storage;
```