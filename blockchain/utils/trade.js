```javascript
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

const tradeNFT = async (contractAddress, tokenId, sellerAddress, buyerAddress, price) => {
    try {
        const contract = new web3.eth.Contract(contractAddress);
        const transaction = contract.methods.safeTransferFrom(sellerAddress, buyerAddress, tokenId);
        const gas = await transaction.estimateGas({from: sellerAddress});
        const data = transaction.encodeABI();
        const nonce = await web3.eth.getTransactionCount(sellerAddress);

        const tx = {
            from: sellerAddress,
            to: contractAddress,
            gas,
            data,
            nonce,
            value: web3.utils.toWei(price, 'ether')
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        return receipt;
    } catch (error) {
        console.error(error);
    }
};

module.exports = tradeNFT;
```