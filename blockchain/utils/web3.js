const Web3 = require('web3');

// Connect to the Ethereum network
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Export the web3 instance
module.exports = web3;