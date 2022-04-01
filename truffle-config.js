require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const privKeyrinkeby = "04ba6e6d3e502e93aea00ff8cc2e70a074e45d10691d2f19b82959e005503130"



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337",
      gas: 4600000 // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privKeyrinkeby,"https://rinkeby.infura.io/v3/97c6834dcbc54133b9fa1d34b1c287f7"),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }

  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
