const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DecentraDrive", function () {
  let decentraDrive;
  let owner;
  let user2;
  let user3;

  beforeEach(async function () {
    const DecentraDrive = await ethers.getContractFactory("DecentraDrive");
    [owner, user1, user2] = await ethers.getSigners();
    decentraDrive = await DecentraDrive.deploy();
  });

  it("Should add a URL to the user's array", async function () {
    await decentraDrive
      .connect(owner)
      .addIMG(owner.address, "https://example.com/image.jpg");
    const urls = await decentraDrive.display(owner.address);
    expect(urls).to.deep.equal(["https://example.com/image.jpg"]);
  });
});
