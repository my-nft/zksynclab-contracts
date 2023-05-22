import { ethers } from "hardhat";
import { mine } from "@nomicfoundation/hardhat-network-helpers";

async function main(hre: HardhatRuntimeEnvironment) {

  // const [deployer] = await ethers.getSigners();
  // const wallet = new Wallet("215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6");

  // const privkey = "215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6"

  // const deployer = new Deployer(hre, wallet);

  // const provider = new Provider("https://sepolia.infura.io/v3/b6271a54103e430fbc6d2ec56ff98755"); // using default http://localhost:8545

  // const signer = new ethers.Wallet(privkey, provider)

  const [deployer] = await ethers.getSigners();

  // console.log("deployer: ", deployer);

  const factoryArtifact = await ethers.getContractFactory("ZklabV1Factory");

  const routerArtifact = await ethers.getContractFactory("Router02");

  const tokenArtifact = await ethers.getContractFactory("TestToken");


  ////////////// deploy weth /////////////////
  const wethArtifact = await ethers.getContractFactory("WETH9");

  const wethInstance = await wethArtifact.deploy();

  await wethInstance.deployed();

  console.log("deployer address: ", deployer.address);

  console.log("wethInstance: ", wethInstance.address);

  ////////////// deploy factory /////////////////

  const factoryInstance = await factoryArtifact.deploy(deployer.address);

  await factoryInstance.deployed();

  console.log("factoryInstance: ", factoryInstance.address);

  ////////////// deploy router /////////////////

  const routerInstance = await routerArtifact.deploy(factoryInstance.address, wethInstance.address);

  await routerInstance.deployed();
  
  console.log("routerInstance: ", routerInstance.address);

  ////////////// deploy token /////////////////

  const tokenInstance = await tokenArtifact.deploy("Test Token 01", "TT01");

  await tokenInstance.deployed();

  console.log("tokenInstance address: ", tokenInstance.address);

  // console.log("tokenInstance: ", tokenInstance);


  // const addLiquidityV3 = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
  // const addLiquidityV3 = routerInstance.address;

  // we need method:trigger anti bot, can be called on transfer to addLiquidityV3 address
  // method will reset the bot block counter
  // method can be called by owner only once  
    

  // const addLiq = (await routerInstance.addLiquidityETH(
  //   tokenInstance.address,
  //   "336336336336000000000000000000",
  //   0,
  //   0,
  //   deployer.address,
  //   "10000000000000000",
  //   {
  //     value: "26700000000000000000",
  //   },
  // )).wait();

  // const addLiq = (await routerInstance.addLiquidityETH(
  //   tokenInstance.address,
  //   "336336336336000000000000000000",
  //   0,
  //   0,
  //   deployer.address,
  //   "10000000000000000",
  //   {
  //     value: "26700000000000000000",
  //   },
  // )).wait();

  


  // console.log("total supply: ", await tokenInstance.totalSupply());
  /////////////// addresses //////////

  // const routerAddress = "0x9f6c5DB8046a5Fae2192666b17f31f7f8b1DCD10";
  // const factoryAddress = "0x830b3019930a701e2905BD3414906C86F0f6441b";
  // const wethAddress = "0x6CEff0f6048009f4474BBF96A8c8f171240deb02";
  // const tokenAddress ="0xb31b256D5CD653B433D662288453fD4932E79F33";

  const routerAddress = routerInstance.address;
  const factoryAddress = factoryInstance.address;
  const wethAddress = wethInstance.address;
  const tokenAddress = tokenInstance.address;

  ////////////// load contracts ///////////

  
  const hardhat = require("hardhat");
  // const routerArtifact2 = await hardhat.artifacts.readArtifact("Router02");

  // const routerInstance = new ethers.Contract(
  //   factoryAddress,
  //   routerArtifact2["abi"],
  //   deployer
  // );

  // const tokenArtifact2 = await hardhat.artifacts.readArtifact("TestToken");

  // const tokenInstance = new ethers.Contract(
  //   tokenAddress,
  //   tokenArtifact2["abi"],
  //   deployer
  // );


  ///////////// add liquidity //////////////////

  const tokenLiquidity = "1000000000000000000000000";

  const tokenMinLiquidity = "10000000000000000000";

  const ethLiquidity = "100000000000000000";

  const ethMinLiquidity = "1000";

  const tokenApprove = await tokenInstance.approve(
    routerAddress, 
    tokenLiquidity
  )

  await tokenApprove.wait();

  console.log("tokenApprove: ", tokenApprove);

  // console.log("tokenAddress: ", tokenAddress);
  // console.log("tokenLiquidity: ", tokenLiquidity);
  // console.log("tokenMinLiquidity: ", tokenMinLiquidity);
  // console.log("ethMinLiquidity: ", ethMinLiquidity);
  // console.log("deployer.address: ", deployer.address);
  // console.log("ethLiquidity: ", ethLiquidity);

  const addLiquidityETH = await routerInstance.addLiquidityETH(
    tokenAddress,
    tokenLiquidity,
    tokenMinLiquidity,
    ethMinLiquidity,
    deployer.address,
    "6000000000000000",
    {
      value: ethLiquidity,
      gasLimit: 4000000,
    } 
  );
  
  // await addLiquidityETH.wait();

  // console.log("addLiquidityETH: ", addLiquidityETH);

  const swapEthAmount = "100000000000000";

  const routes = [
    wethAddress,
    tokenInstance.address
  ];

  // const swapExactETHForTokens = await routerInstance.swapExactETHForTokens(
  //   "0",
  //   routes,
  //   deployer.address,
  //   "100000000000000",
  //   {
  //     value: swapEthAmount,
  //     gasLimit: 500000,
  //   }
  // ) 

  // await swapExactETHForTokens.wait();


  // const swapExactETHForTokensSupportingFeeOnTransferTokens = await routerInstance.swapExactETHForTokensSupportingFeeOnTransferTokens(
  //   "0",
  //   routes,
  //   deployer.address,
  //   "100000000000000",
  //   {
  //     value: swapEthAmount,
  //     gasLimit: 500000,
  //   }
  // ) 

  // await swapExactETHForTokensSupportingFeeOnTransferTokens.wait();

  // const routes2 = [
  //   tokenInstance.address,
  //   wethAddress
  // ];

  // const swapTokensAmount = "10000000000000000000";

  // const tokenApprove2 = await tokenInstance.approve(
  //   routerAddress, 
  //   swapTokensAmount
  // )

  // await tokenApprove2.wait();
  // const swapExactTokensForETH = await routerInstance.swapExactTokensForETH(
  //   swapTokensAmount,
  //   "0",
  //   routes2,
  //   deployer.address,
  //   "100000000000000",
  //   {
  //     gasLimit: 500000,
  //   }
  // ) 

  // await swapExactETHForTokens.wait();

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
