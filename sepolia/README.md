# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
npx ganache --gasLimit=3000000000000000000000 --account="0xfe91a05c14d7213724de4051553c7e5e58fd4f1582570f64ae747693a9f34f78,0x90000000000000000000000" --verbose --miner.callGasLimit=3000000000000000000000