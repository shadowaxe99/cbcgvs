```javascript
const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);

async function getBalance(address) {
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
}

async function sendTransaction(to, value) {
    const transaction = {
        to,
        value: ethers.utils.parseEther(value)
    };

    const signTransaction = await wallet.signTransaction(transaction);
    const tx = await provider.sendTransaction(signTransaction);
    return tx;
}

module.exports = {
    getBalance,
    sendTransaction
};
```