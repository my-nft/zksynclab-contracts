import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {

  defaultNetwork: "ganache",
  networks: {
    fxTestnet: {
      url: "https://testnet-fx-json-web3.functionx.io:8545",
      // ethNetwork: "https://goerli.infura.io/v3/b6271a54103e430fbc6d2ec56ff98755",
      // verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
      gas: 10100000,
      // gasPrice: 8000000000,
      accounts: [
        ``,
      ],
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/b6271a54103e430fbc6d2ec56ff98755", //"https://sepolia.infura.io/v3/",
      // ethNetwork: "https://goerli.infura.io/v3/b6271a54103e430fbc6d2ec56ff98755",
      // verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
      // gas: 10100000,
      // gasPrice: 8000000000,
      accounts: [
        ``,
        // ``,
      ],
    },
    ganache: {
      chainId: 1337,
      url: "http://127.0.0.1:8545",
      gas: 5100000,
      allowUnlimitedContractSize: true,
      accounts: [
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
      ],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
};

export default config;
