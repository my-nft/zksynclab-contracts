import { ethers } from "hardhat";
import { mine } from "@nomicfoundation/hardhat-network-helpers";

async function main(hre: HardhatRuntimeEnvironment) {

  const [deployer] = await ethers.getSigners();

  const factoryArtifact = await ethers.getContractFactory("ZklabV1Factory");

  const routerArtifact = await ethers.getContractFactory("Router02");

  const tokenArtifact = await ethers.getContractFactory("PooPreps");


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

  const tokenInstance = await tokenArtifact.deploy();

  await tokenInstance.deployed();

  await tokenInstance.setRouterAddress(routerInstance.address);
  
  console.log("tokenInstance address: ", tokenInstance.address);

  console.log("abTribber: ", await tokenInstance._abTrigger());
  // console.log("tokenInstance: ", tokenInstance);

  const address1 = "0xB2f265b94443B913eFAD3805A75C4B1b9493adAa";
  const address2 = "0xedE87985892f3D664EEF2BF7BCd67624B5310ac1";
  const address3 = "0x9AC497747bfB87f8213995188105f207E3d8edDa";
  const address4 = "0xAe50D7af49E51Fb5Ce47f3Cb159A8867e913e506";
  const address5 = "0x44BA620bd600E57884667B07E613711eDc44c098";
  const randomAddress = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5";

  // const addLiquidityV3 = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
  const addLiquidityV3 = routerInstance.address;
  // we need method:trigger anti bot, can be called on transfer to addLiquidityV3 address
  // method will reset the bot block counter
  // method can be called by owner only once  

  const max1 = await tokenInstance.getMaxCumulativeBalanceForAccount(address1);
  console.log("max1: ", max1);
  const max2 = await tokenInstance.getMaxCumulativeBalanceForAccount(address2);
  console.log("max2: ", max2);
  const max3 = await tokenInstance.getMaxCumulativeBalanceForAccount(address3);
  console.log("max3: ", max3);
  const max4 = await tokenInstance.getMaxCumulativeBalanceForAccount(address4);
  console.log("max4: ", max4);
  const max5 = await tokenInstance.getMaxCumulativeBalanceForAccount(address5);
  console.log("max5: ", max5);
  const maxRandomAddress = await tokenInstance.getMaxCumulativeBalanceForAccount(randomAddress);
  console.log("rand: ", maxRandomAddress);

  console.log("total supply: ", await tokenInstance.totalSupply());
  /////////////// addresses //////////

  // const routerAddress = "0x980aCF80570e0895A3e03D8786A4cCB7C94408b2";
  // const factoryAddress = "0xE5D0eB12257DFE3b17b34f758efD7c6631f97017";
  // const wethAddress = "0x1dDaBBFF083301E937b24fA4C31ebCb9c695F39c";
  // const tokenAddress = tokenInstance.address;//"0x2529c9De9d39B4fd354B90927c83A82d5Bd6a552";

  ////////////// load contracts ///////////

  
  // const hardhat = require("hardhat");
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

  const tokenLiquidity = "1000000000000000000000";

  const tokenMinLiquidity = "10000000000000000000";

  const ethLiquidity = "10000000000000000";

  const ethMinLiquidity = "1000";

  // const tokenApprove = await tokenInstance.approve(
  //   routerAddress, 
  //   tokenLiquidity
  // )

  // await tokenApprove.wait();

  // const addLiquidityETH = await routerInstance.addLiquidityETH(
  //   tokenAddress,
  //   tokenLiquidity,
  //   tokenMinLiquidity,
  //   ethMinLiquidity,
  //   deployer.address,
  //   "6000000000000000",
  //   {
  //     value: ethLiquidity,
  //     gasLimit: 4000000,
  //   } 
  // );
  
  // await addLiquidityETH.wait();

  // console.log("addLiquidityETH: ", addLiquidityETH);

  // const swapEthAmount = "100000000000000";

  // const routes = [
  //   wethAddress,
  //   tokenInstance.address
  // ];

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
