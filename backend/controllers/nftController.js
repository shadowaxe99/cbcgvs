```javascript
const NFT = require('../models/NFT');
const errorHandler = require('../utils/errorHandler');

exports.createNFT = async (req, res) => {
    try {
        const nft = new NFT(req.body);
        await nft.save();
        res.status(201).json({ message: 'NFT created successfully', nft });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.getAllNFTs = async (req, res) => {
    try {
        const nfts = await NFT.find();
        res.status(200).json(nfts);
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.getNFT = async (req, res) => {
    try {
        const nft = await NFT.findById(req.params.id);
        if (!nft) {
            return res.status(404).json({ message: 'NFT not found' });
        }
        res.status(200).json(nft);
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.updateNFT = async (req, res) => {
    try {
        const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!nft) {
            return res.status(404).json({ message: 'NFT not found' });
        }
        res.status(200).json({ message: 'NFT updated successfully', nft });
    } catch (error) {
        errorHandler(res, error);
    }
};

exports.deleteNFT = async (req, res) => {
    try {
        const nft = await NFT.findByIdAndRemove(req.params.id);
        if (!nft) {
            return res.status(404).json({ message: 'NFT not found' });
        }
        res.status(200).json({ message: 'NFT deleted successfully' });
    } catch (error) {
        errorHandler(res, error);
    }
};
```