module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", 
      chain_id: 5777 ,// Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
