async function main() {
  //Fetch contract
  const Token = await ethers.getContractFactory("Token");
  
  //Deploy contract
  const token = await Token.deploy();

  //Wait for confirmation
  await token.deployed();
  console.log(`Token deployed to: ${token.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
