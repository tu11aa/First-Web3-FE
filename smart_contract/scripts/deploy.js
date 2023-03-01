async function main() {
  const transactionFactory = await ethers.getContractFactory("Transactions");
  const transactions = await transactionFactory.deploy();
  await transactions.deployed();
  console.log(`Contract deployed at address ${transactions.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
