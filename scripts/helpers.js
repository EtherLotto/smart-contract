const { ethers } = require('ethers')
const { getContractAt } = require('@nomiclabs/hardhat-ethers/internal/helpers')

// Fetching environment variables from .env
function getEnvVariable(key) {
  if (process.env[key]) {
    return process.env[key]
  }
  throw new Error(`${key} is not defined and no default value was provided`)
}

// Fetching a connection provider to the Ethereum network
function getProvider() {
  const NETWORK = getEnvVariable('NETWORK')
  if (NETWORK === 'ganache') {
    return new ethers.providers.WebSocketProvider('http://localhost:8545')
  }
  return ethers.getDefaultProvider(NETWORK, {
    alchemy: getEnvVariable('ALCHEMY_KEY')
  })
}

// Fetching a wallet account using an environment variable for the PK
function getAccount() {
  return new ethers.Wallet(getEnvVariable('ACCOUNT_PRIVATE_KEY'), getProvider())
}

// Fetching a contract instance at a given address
async function getContract(name, hre) {
  if (getEnvVariable('NETWORK') === 'ganache') {
    const artifact = await artifacts.readArtifact(name)
    return new hre.ethers.Contract(getEnvVariable('CONTRACT_ADDRESS'), artifact.abi, getAccount())
  } else {
    return getContractAt(hre, name, getEnvVariable('CONTRACT_ADDRESS'), getAccount())
  }
}

module.exports = {
  getEnvVariable,
  getProvider,
  getAccount,
  getContract
}
