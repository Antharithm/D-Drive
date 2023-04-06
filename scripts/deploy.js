const hre = require("hardhat");

async function main() {

  const DecentraDrive = await hre.ethers.getContractFactory("DecentraDrive");
  const decentraDrive = await DecentraDrive.deploy();

  await decentraDrive.deployed();

  console.log(
    `DecentraDrive was deployed to: ${decentraDrive.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
