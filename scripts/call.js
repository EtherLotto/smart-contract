const { task } = require('hardhat/config')
const { getAccount, getContract } = require('./helpers')

task('buy-lottery', '购买彩票').addParam('number', '彩票号码').addParam('amount', '金额').setAction(async (taskArguments, hre) => {
  const contract = await getContract('EtherLotto', hre)
  const params = [
    taskArguments.number,
    {
      value: hre.ethers.utils.parseEther(taskArguments.amount)
    }
  ]
  await contract.callStatic.buyLottery(...params)
  const transactionResponse = await contract.buyLottery(...params)

  console.log(`购买彩票完成[${taskArguments.amount} ETH 玩法 号码 ${taskArguments.number}]: ${transactionResponse.hash}`)
})

task('redeem', '兑奖').addParam('id', '彩票ToeknId').setAction(async (taskArguments, hre) => {
  const contract = await getContract('EtherLotto', hre)
  const params = [
    taskArguments.id,
    getAccount().address
  ]
  await contract.callStatic.redeem(...params)
  const transactionResponse = await contract.redeem(...params)

  console.log(`兑奖完成: ${transactionResponse.hash}`)
})

task('receive-award', '领取自己的奖励').setAction(async (taskArguments, hre) => {
  const contract = await getContract('EtherLotto', hre)
  const params = [
    getAccount().address
  ]
  await contract.callStatic.receiveAward(...params)
  const transactionResponse = await contract.receiveAward(...params)

  console.log(`领取自己的奖励完成: ${transactionResponse.hash}`)
})
