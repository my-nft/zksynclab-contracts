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
        `215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6`,
      ],
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/b6271a54103e430fbc6d2ec56ff98755", //"https://sepolia.infura.io/v3/",
      // ethNetwork: "https://goerli.infura.io/v3/b6271a54103e430fbc6d2ec56ff98755",
      // verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
      // gas: 10100000,
      // gasPrice: 8000000000,
      accounts: [
        `215f466b3e435d7ce15f03dae4d1ef774eb7598945c41d887c1e70d474fdc2b6`,
        // `3223c0acf42c864c88b59ad2a9db217632c304372e0261bd763966a30b133d1d`,
      ],
    },
    ganache: {
      chainId: 1337,
      url: "http://127.0.0.1:8545",
      gas: 5100000,
      allowUnlimitedContractSize: true,
      accounts: [
        `0xfe91a05c14d7213724de4051553c7e5e58fd4f1582570f64ae747693a9f34f78`,
        `0xb315a3ddec997874fe2c72a409eaf4c2f8aff024ffe714349c9e15de71064c06`,
        `0x4cec5fe607376277092fc4c5b306b93ee5bd08d7eb8432497355ea7b5a0a323d`,
        `0x4aab08bd570dd87c2b8b26363b0fb4c8e2bc1fce5bf5a9dddc161ed324d023c6`,
        `0x12fd816e8866c98975505af32ae0fe2de135a4e345346fe1383eb76f0be9b912`,
        `0xbed7bb8a0c6adf66be9af6d182d1c9510b90ef8780aa0a36dc4a01967b07b329`,
        `0xbf38a14cd0cdedb08ec9fe9d305ba4ee97fa719207cbaca6798b0e7644a970c9`,
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
