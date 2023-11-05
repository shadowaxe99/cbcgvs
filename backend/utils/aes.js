```javascript
const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = process.env.SECRET_KEY || 'default_secret_key';

const encrypt = (text) => {
    const cipher = crypto.createCipher(algorithm, secretKey);
    const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
    return encrypted.toString('hex');
};

const decrypt = (hash) => {
    const decipher = crypto.createDecipher(algorithm, secretKey);
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, 'hex')), decipher.final()]);
    return decrpyted.toString('utf8');
};

module.exports = {
    encrypt,
    decrypt
};
```