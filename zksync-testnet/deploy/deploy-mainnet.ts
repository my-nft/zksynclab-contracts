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

  const wethAddress = "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";
  const feeAddress = "0x784C8c8084DAEc060CFc7594b996c14b3407529f";
  const feeAmount = "10";

//   Deposit some funds to L2 in order to be able to perform L2 transactions.
  const depositAmount = ethers.utils.parseEther("0.001");
  const depositHandle = await deployer.zkWallet.deposit({
    to: deployer.zkWallet.address,
    token: utils.ETH_ADDRESS,
    amount: depositAmount,
  });
//   Wait until the deposit is processed on zkSync
  await depositHandle.wait();

  ////////////// deploy factory /////////////////
  const pairFactoryContract = await deployer.deploy(
    pairFactory, [feeAddress]
  );
  
//   Show the contract info.
  const pairFactoryAddress = pairFactoryContract.address;
  console.log(`${pairFactory.contractName} was deployed to ${pairFactoryAddress}`);

  //////////// deploy router /////////////////
  
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

///////////////////// load router ////////////////////
  const routerAddress = "0x192d9dC09b84A9696325B3bf3520E1Ac3b8718d9";
  const routerArtifact = await hardhat.artifacts.readArtifact("Router02");

  const routerContract = new ethers.Contract(
    routerAddress,
    routerArtifact["abi"],
    signer
  );

  //////////////// load Token ////////////////
  const tokenAddress = "0x5A1032Ee75b8Fe3cBBF114D964cFDeDBA92b5A39";
  const tokenArtifact = await hardhat.artifacts.readArtifact("TestToken");

  const tokenInstance = new ethers.Contract(
    tokenAddress,
    tokenArtifact["abi"],
    signer
  );

  ///////////////////// load factory ////////////////////
  const factoryAddress = "0x4d2AFf92a3bC1cfa069ec19632CaaA0dD21e680a";
  const factoryArtifact = await hardhat.artifacts.readArtifact("ZklabV1Factory");

  const factoryContract = new ethers.Contract(
    factoryAddress,
    factoryArtifact["abi"],
    signer
  );

  const wethAddress = "0x6335d18cE0934041FEa240866C06F69BC6C96a50";

  const token1Liquidity = "1000000000000000000000"; // eq 1 Token
  const token1MinLiquidity = "1000";
  const ethLiquidity = "10000000000000000"; // 0.01
  const ethMinLiquidity = "10";
  const user1 = "0x72DDbDc341BBFc00Fe4F3f49695532841965bF0E";

  // const routerAddress = routerContract.address;
  // const tokenAddress = token
  // console.log("beofore approve")
  // const tokenApprove = await tokenInstance.approve(
  //   routerAddress, 
  //   token1Liquidity,
  //   {
  //     gasLimit: 21000000,
  //   }
  // )
  // console.log("after approve")
  // let tokenApproveReceipt = await tokenApprove.wait();
  // console.log("tokenApproveReceipt: ",tokenApproveReceipt.hash)

  // const addLiquidityETH = await routerContract.addLiquidityETH(
  //   tokenAddress,
  //   token1Liquidity,
  //   token1MinLiquidity,
  //   ethMinLiquidity,
  //   user1,
  //   "6000000000000000",
  //   {
  //     value: ethLiquidity,
  //     gasLimit: 21000000,
  //   } 
  // );

  // let addLiquidityETHReceipt = await addLiquidityETH.wait();
  // console.log("addLiquidityETHReceipt: ",addLiquidityETHReceipt.hash)

  

  const swapEthAmount = "1000000000000000";

  const routes = [
    wethAddress,
    tokenInstance.address
  ];
  const getAmountsOut = await routerContract.getAmountsOut(swapEthAmount, routes);

  console.log("getAmountsOut: ", getAmountsOut);

  const getPair = await factoryContract.getPair(wethAddress,tokenInstance.address);

  console.log("getPair: ", getPair);

  // const swapExactETHForTokens = await routerContract.swapExactETHForTokens(
  //   "0",
  //   routes,
  //   user1,
  //   "100000000000000",
  //   {
  //     value: swapEthAmount,
  //     gasLimit: 500000,
  //   }
  // ) 
}

// WETH9 was deployed to 0x6335d18cE0934041FEa240866C06F69BC6C96a50
// ZklabV1Factory was deployed to 0x4d2AFf92a3bC1cfa069ec19632CaaA0dD21e680a