const Token = artifacts.require("Token");
const ethSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {
  await deployer.deploy(Token);
  const token = await Token.deployed();

  await deployer.deploy(ethSwap,token.address);
  const EthSwap = await ethSwap.deployed();
  await token.transfer(EthSwap.address,'1000000000000000000000000')

};

