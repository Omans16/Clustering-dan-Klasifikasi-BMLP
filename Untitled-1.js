const { ethers } = require("ethers");

async function getPublicKey() {
    const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");
    const wallet = new ethers.Wallet("PRIVATE_KEY_HERE", provider);
    console.log("Public Key:", wallet.publicKey);
}

getPublicKey();
