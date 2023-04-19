const { expect } = require("chai");

describe("DecentraDrive", function () {
  let decentraDrive;
  let owner;
  let user1;
  let user2;

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

  it("Should only allow authorized users to access a user's drive", async function () {
    await decentraDrive
      .connect(owner)
      .addIMG(owner.address, "https://example.com/image.jpg");
    await expect(
      decentraDrive.connect(user1).display(owner.address)
    ).to.be.revertedWith("You don't have access");
    await decentraDrive.connect(owner).allowUser(user1.address);
    const urls = await decentraDrive.connect(user1).display(owner.address);
    expect(urls).to.deep.equal(["https://example.com/image.jpg"]);
  });
});
