```javascript
const Web3 = require('web3');
const { abi, networks } = require('../contracts/Persona.sol.json');

const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const contract = new web3.eth.Contract(abi, networks['1'].address);

const mintNFT = async (account, privateKey, tokenURI) => {
  const nonce = await web3.eth.getTransactionCount(account, 'latest'); // nonce starts counting from 0

  const tx = {
    'from': account,
    'to': contract.options.address,
    'nonce': nonce,
    'gas': 500000,
    'data': contract.methods.mintNFT(account, tokenURI).encodeABI()
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
  web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
    if (!err) {
      console.log('Txn Hash : ', hash);
    } else {
      console.log('Oh no!: ', err);
    }
  });
};

module.exports = mintNFT;
```