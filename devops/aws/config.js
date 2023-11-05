const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1', // Update this with the region you are using
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

module.exports = AWS;