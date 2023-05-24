import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
module.exports = {
  zksolc: {
    version: "1.3.8",
    compilerSource: "binary",
    settings: {},
  },
  defaultNetwork: "zkTestnet",
  networks: {
    zkTestnet: {
      url: "https://testnet.era.zksync.dev", // URL of the zkSync network RPC
      ethNetwork: "https://goerli.infura.io/v3/b6271a54103e430fbc6d2ec56ff98755",
      zksync: true,
      verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
      gas: 2100000,
      gasPrice: 8000000000
    },
    hardhat: {
    chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:8545",
      zksync: true,
      accounts: [
        `215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6`,
      ],
    }
  },

  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
      {
        version: "0.8.8",
      },
      {
        version: "0.8.13",
      },
      {
        version: "0.4.18",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 20
    }
  },
  allowUnlimitedContractSize: true,
};
