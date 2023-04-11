# Decentra Drive

Decentralized file storage system.

###

To run this program you will need to set up the following:
1. Metamask account (save your private key inside of a dotenv file). https://metamask.io/
2. Pinata account (save your API and Secret Key inside of a dotenv file). https://www.pinata.cloud/
3. Clone this repo to your local device and CD into that folder.
4. Run: `npm install` from the main directory.
5. CD into the "frontend" folder and run: `npm install`
6. CD back to the main directory and create a dotenv file (see example) input all of the parameters.
7. Compile the smart contract from the main directory: `npx hardhat compile`
8. Deploy smart contract on Ethereum Goerli testnet and run this command: `npx hardhat run scrips/deploy.js --network goerli`
9. CD back to the "frontend" folder and run: `npm run start` App will launch from a new browser window.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
