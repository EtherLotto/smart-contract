const { task } = require('hardhat/config')
const { getAccount, getContract } = require('./helpers')

task('check-balance', '获取账户余额').setAction(async (taskArguments, hre) => {
  const account = getAccount()
  const balance = await account.getBalance()

  console.log(`${account.address} 账户余额: ${hre.ethers.utils.formatEther(balance)} ETH`)
})

task('check-contract-balance', '获取合约余额').setAction(async (taskArguments, hre) => {
  const contract = await getContract('EtherLotto', hre)
  const balance = await contract.provider.getBalance(contract.address)

  console.log(`${contract.address} 合约余额: ${hre.ethers.utils.formatEther(balance)} ETH`)
})

task('check-period', '获取期数信息').addParam('type', '玩法类型').setAction(async function (taskArguments, hre) {
  const contract = await getContract('EtherLotto', hre)
  const period = await contract.periods(hre.ethers.utils.parseEther(taskArguments.type))

  console.log(`期数信息[${taskArguments.type} ETH 玩法]: ${period}`)
})

task('check-award', '获取奖励信息').addParam('address', '奖励地址').setAction(async function (taskArguments, hre) {
  const contract = await getContract('EtherLotto', hre)
  const award = await contract.awards(taskArguments.address)

  console.log(`奖励金额[${taskArguments.address}]: ${hre.ethers.utils.formatEther(award)} ETH`)
})

task('check-token-url', '获取彩票Token').addParam('id', 'TokenId').setAction(async function (taskArguments, hre) {
  const contract = await getContract('EtherLotto', hre)
  const response = await contract.tokenURI(taskArguments.id)

  console.log(`彩票Token[${taskArguments.id}]: ${response}`)
})
