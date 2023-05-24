import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Provider } from "zksync-web3";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for zkSync labs contract`);

  // Initialize the wallet.
  const wallet = new Wallet("215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6");
  // const wallet = new Wallet("c90c0e71c0692ffac2c2931b8d067d4fc24d04c64194ff560e8b1f8b4d1b6345");
  // const wallet = new Wallet("3223c0acf42c864c88b59ad2a9db217632c304372e0261bd763966a30b133d1d")
  const privkey = "215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6"
  // Create deployer object and load the artifact of the contract we want to deploy.
  const deployer = new Deployer(hre, wallet);

  const provider = new Provider("https://testnet.era.zksync.dev"); // using default http://localhost:8545
  const signer = new ethers.Wallet(privkey, provider)
  // const factory = await deployer.loadArtifact("CamelotFactory");
  // const odosRouter = await deployer.loadArtifact("OdosRouter");

  // const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  const pairFactory = await deployer.loadArtifact("ZklabV1Factory");
  const router = await deployer.loadArtifact("Router02");
  const weth = await deployer.loadArtifact("WETH9");
  const token = await deployer.loadArtifact("TestToken");

  // Deposit some funds to L2 in order to be able to perform L2 transactions.
  const depositAmount = ethers.utils.parseEther("0.001");
  const depositHandle = await deployer.zkWallet.deposit({
    to: deployer.zkWallet.address,
    token: utils.ETH_ADDRESS,
    amount: depositAmount,
  });
//   Wait until the deposit is processed on zkSync
  await depositHandle.wait();

  //////////////// deploy WETH /////////////////
  const wethContract = await deployer.deploy(
    weth
  );
  
//   Show the contract info.
  const wethAddress = wethContract.address;
  console.log(`${weth.contractName} was deployed to ${wethAddress}`);

  ////////////// deploy factory /////////////////
  const pairFactoryContract = await deployer.deploy(
    pairFactory, ["0x72DDbDc341BBFc00Fe4F3f49695532841965bF0E"]
  );
  
//   Show the contract info.
  const pairFactoryAddress = pairFactoryContract.address;
  console.log(`${pairFactory.contractName} was deployed to ${pairFactoryAddress}`);

  //////////// deploy router /////////////////
  const feeAddress = "0x8b7D4ce86Dd986874541E513e38D76168DC3bA9C";
  const feeAmount = "10";
  const routerContract = await deployer.deploy(
    router,
    [
      pairFactoryAddress,
      wethAddress,
      feeAddress,
      feeAmount
    ]
  );
  
//   Show the contract info.

const hardhat = require("hardhat");
//   const routerAddress = "0xb7Ee575835141bFabEa2711df4bC559AC614ae74";
//   const routerArtifact = await hardhat.artifacts.readArtifact("Router02");

//   const routerInstance = new ethers.Contract(
//     routerAddress,
//     routerArtifact["abi"],
//     signer
//   );

  //////////////// Token approve ////////////////
  const tokenAddress = "0x5A1032Ee75b8Fe3cBBF114D964cFDeDBA92b5A39";
  const tokenArtifact = await hardhat.artifacts.readArtifact("TestToken");

  const tokenInstance = new ethers.Contract(
    tokenAddress,
    tokenArtifact["abi"],
    signer
  );

  const token1Liquidity = "1000000000000000000"; // eq 1 Token
  const token1MinLiquidity = "1000";
  const ethLiquidity = "100000000000000"; // 0.0001
  const ethMinLiquidity = "10";
  const user1 = "0x72DDbDc341BBFc00Fe4F3f49695532841965bF0E";

  const routerAddress = routerContract.address;
  // const tokenAddress = token
  console.log("beofore approve")
  const tokenApprove = await tokenInstance.approve(
    routerAddress, 
    token1Liquidity,
    {
      gasLimit: 21000000,
    }
  )
  console.log("after approve")
  let tokenApproveReceipt = await tokenApprove.wait();
  console.log("tokenApproveReceipt: ",tokenApproveReceipt)
  const addLiquidityETH = await routerContract.addLiquidityETH(
    tokenAddress,
    token1Liquidity,
    token1MinLiquidity,
    ethMinLiquidity,
    user1,
    "6000000000000000",
    {
      value: ethLiquidity,
      gasLimit: 21000000,
    } 
  );

  let addLiquidityETHReceipt = await addLiquidityETH.wait();
  console.log("addLiquidityETHReceipt: ",addLiquidityETHReceipt)
}
