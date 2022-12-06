import "dotenv/config"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
import '@nomiclabs/hardhat-solhint'
import "@nomiclabs/hardhat-ethers"
import "hardhat-abi-exporter"
import "hardhat-gas-reporter"
import "hardhat-log-remover"
import "hardhat-spdx-license-identifier"
import "hardhat-deploy"
import "hardhat-deploy-ethers"
import "hardhat-contract-sizer"
import "solidity-coverage"
import { HardhatUserConfig } from "hardhat/types"

const config: HardhatUserConfig = {
  abiExporter: {
    path: "./abi",
    clear: false,
    flat: true,
  },
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x` + process.env.ETH_PRIVATE_KEY],
      chainId: 1,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x` + process.env.ETH_PRIVATE_KEY],
      chainId: 5,
    },
    private: {
      url: "http://34.92.231.119:8545",
      accounts: [`0x${process.env.ETH_PRIVATE_KEY}`],
      chainId: 9999,
    }
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
    sources: "contracts",
    tests: "test",
  },
  solidity: {
    compilers: [
      {
        version: "0.5.11",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
  mocha: {
    timeout: 3000000
  },
  gasReporter: {
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: "USD",
    enabled: process.env.REPORT_GAS === "true",
    excludeContracts: ["contracts/mocks/", "contracts/libraries/"],
  },
};
export default config;
