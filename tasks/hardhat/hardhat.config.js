require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, CORED_URL, SEPOLIA_URL, ETHERSCAN_API_KEY, CORE_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      chainId: 11155111,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    coredao: {
      url: CORED_URL,
      chainId: 1114,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
      coredao: CORE_API_KEY,
    },
  },
  
};

