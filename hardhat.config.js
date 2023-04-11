require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
    }
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }
};