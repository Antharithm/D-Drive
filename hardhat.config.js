require("@nomicfoundation/hardhat-toolbox");
// require("./tasks/block-number"); // check the 'tasks' folder OR make it a script file
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("solidity-coverage");
// require("hardhat-gas-reporter");

module.exports = {
  solidity: "0.8.17",

  networks: {
      goerli: {
          url: process.env.GOERLI_RPC_URL,
          accounts: [process.env.PRIVATE_KEY],
          chainId: 5,
      },
      mumbai: {
        url: process.env.MUMBAI_RPC_URL,
        accounts: [process.env.PRIVATE_KEY],
        chainId: 80001,
      },
      arbitrum: {
        url: process.env.ARBITRUM_RPC_URL,
        accounts: [process.env.PRIVATE_KEY],
        chainId: 421613,
      }
  },
  path: {
    artifacts: "./frontend/src/artifacts",
  },
  etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
  },
  // gasReporter: {
  //     enabled: true,
  //     currency: "USD",
  //     outputFile: "gas-report.txt",
  //     noColors: true,
  //     coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  // },
}