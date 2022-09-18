const { task } = require('hardhat/config')
const { getAccount } = require('./helpers')

task('deploy', '合约部署').setAction(async function (taskArguments, hre) {
  const EtherLottoFactory = await hre.ethers.getContractFactory('EtherLotto', getAccount())
  const contract = await EtherLottoFactory.deploy()

  console.log(`合约部署地址: ${contract.address}`)
})
