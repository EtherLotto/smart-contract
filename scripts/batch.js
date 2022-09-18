const { task } = require('hardhat/config')
const { getEnvVariable } = require('./helpers')

// grant risk slide broom velvet job scare ski piano narrow copper perfect
const accounts = [
  '0x6f19ec5fa2ea0851fe0218d85f7ccad9d63a7f8d4183303f7002152a6d35670a',
  '0x80f576adf1412d5b0a936fb260ec76a087649e609d99144d6b6a2cbd61c14216',
  '0x8cf2c4d9709eb838634cdbe9a6376b472b10e5cf0d027e1d90216dfb52103805',
  '0xf7db5ec8832747231d2b562e91fb06f709536c22172feb77b339bc96223893c9',
  '0xd5fb94983f09a3b9da072cae8d8a755f67b6870fbb0c497f0d950851c3201f49',
  '0xe370f6019dc47e9ae92b11d02cbfb07a4667cb98bac6ad4e92b45b24344ca95c',
  '0x0a8a32497783219f39e664a54ae2801ce81d7d54586b5d72f925a861c853841d',
  '0xa11a901a844dbf3def8c1f8383a7714e9c6cca3226dbb66cf51c3bfab1a707b2',
  '0x5e24cb1763d46b75152f1123e3bd7a6cca877436afe62692f5f38adb8207d04c',
  '0x4753c6287d1018e42f2aec4d6d301df4fb1148bb82b710255678160efa99072a',
  '0x7817fc7b69ff41c23c8379e64a5f1eaa9e7531a3817f815bef6527d0d2275c0d',
  '0x0fdcee778eb6db4fa444b3b75f0b672ab02cf2e75c32bb44b1ab225637503d05',
  '0x618cf4bb723946601e8e2bdda5b056bfc7e53cdb4bcfa49e31c16fd1b3f868e1',
  '0xdfe0fa40ea7076ec3dd47e3da36126cb4134573143e67615b616c8551706a73e',
  '0x449ccf328bf1d682d3a98eab450a0729a03c19d10c9e272afeb47d73445402e6',
  '0xd103820a9e18f500cf0cbc636fa7f21d97a85948ee5894454fce5b9db654b645',
  '0x164c059dfda6aa66011b9867850bb721957de1895d64a94231f42e3eca6fcbc7',
  '0xa88eb08db4b9e7032641f8c0de4117654bfeb5b3d25a1c4e56187f6e604fd069',
  '0xd9a304f4c13e3ea56963304021be48134f542959ebfcfc08472a6fdc980aaf5f',
  '0x5cacd314ee39bef78326b3e56aa583fc77cc5b9f848af8526256e022bb207833',
  '0x81f39146d7a7e66f162870121458ae990c06510dbf819b8d7ad6072241bbac02',
  '0xa838c222964e63a2b9725fb0d751164d44a192ada9f764b9543fd13318e9c3cb',
  '0xe7675eafd70a6f848f257a83b98c53cc6d9b11563c17b8206e4e297ad64e7db6',
  '0x7337d26fe861fab81b1a422c35825bf56d80dda55edc6738d8e9ef70bf73b25c',
  '0x254e1f1d080a22d877cf57671ea5ce34790f0a29aefadff3717c12ad107b77ac',
  '0x0c7d2b97ab27c2d0cfe4709682dac339cec0b5c3286f8764bf0792802f7dd2d3',
  '0xe6241e2eacac2a6e434b66886c930bfd07ac4b80658230da059376a8706ee15b',
  '0xbb2d7c2ab74f679a17583b1e5a43f9f83a2f6cb4ca2692573bf634acbe570c42',
  '0xf0bb6949f7c5d9a2ec3efeb6ee8e279bfe5ad0f83a0c543800bb683fba4549bc',
  '0xe3e2e13f81fd0dad9d2843c1bdf9cff50b8bf074bd19d54964ba30679b7dcca0',
  '0xb78acc0ea2ccd6e56c97d492e4689d059e9cd7ecc1a2e2d23a1a00772d8b1a23',
  '0x2e79fdd3124a845a7ef2486cc9da53b554f88c83c00b8b10cebddfa9bd4ab6f2',
  '0x7fd4226ecd12e703a715a7866e53b2e2d27c26516e23be9b049604492e8f33df',
  '0x7f304bd23831824b3b7cf54e33d2043cd8cf6b6ab2219a0e17f642996f7b8deb',
  '0x762f8372f3d6859510d151845a341eb95fb8a0d2a5b9226db7790ce6d3bd5f9f',
  '0x64daa9fe8d7a8c7b215fd4bf6ee6fdb03cbfd30f791aab3a6c804e46bc9ccf45',
  '0xfa6bcedfd2ea5409f05d45e1e53d70916b128556258eedb352864ac94e9df5f3',
  '0xc7191594ac698511acd183ee47b918777f7319f9de0f0673012df0c1ac2c4c72',
  '0xe034edc48a19a92adde93fa46644c93f94d941da63ce89cc3135897da5611f9d',
  '0x74671130542f6c9f8e514deb0c81e2cf9602eacf6bc1ceb8cf353108529ac728',
  '0x86771bb29f549a1180d5eb8b15dfd6ebcf690211640785940452e37d2631306d',
  '0x08650d6ff26174a8f8712e1e1215345f2d9c26010982cfbf56a200df2e9565d9',
  '0x77b9d92c14b382dd20ca0ddf5d2a488c3468f3a24a2f4e62bf794aabe8caf392',
  '0x48a82252acef312bb06378be3847faf158c4f1a90f51cafcfdc0a71860175409',
  '0x2c6c0216f3913a5fab2738555bf5a636112dcb717db7ac7b4ae970972089b519',
  '0xf1f7044e8921612a52abbf1884e6c1a2d14eabf8728c6e7e376a29f78ba9ce1a',
  '0x9c6dc40ff787fdd156ae31879e25dbf4625e96f88eac33f4db48e41622e05e9b',
  '0xe10fdfcaa0a37253c45d66093205be117a5d25ea60cdf61017807959638b60c8',
  '0xbb1d33d063bd585df84b8158a1eedfee5646876aa7a749a74f0b1b9b1c23107e',
  '0x48827b4daf7830739c5dc6c2ccfbc4166142538ae2fe415b708dbb102681edc1',
  '0x269a5d2717e36ec353f8ae393a11cf8bbb05bc1702de020570245986454b9f84',
  '0xebe0c2cb1a40f7a93798bbbf6e9624f2b6b1dd157b822585c6629d9d437991b9',
  '0x3fc33a33c0e42d12a1950b9a8b884725cdb2436c250e3be43fb1f1d0f4e66aed',
  '0xafb61123cdca1d59d87f239d97b180324532e6bb60efd8b42d415d3bbefd0e50',
  '0xd49687d1a68e55780d39f33f6d3f40d7f80603fc8750bfe90bdfb14db73cf36a',
  '0x42e1aa582bd84f0af4c79e450347b74e4e9536ac4f4094f6286a6edc06faea2b',
  '0xd979775527300005117f8ef79a34d98e696eb389c968e3c09362b7f04c5ac12c',
  '0x7e492d56f566b5bbad037b6050c5a425fc7f833d7a8abcf7764563d156df6ac6',
  '0xe18355839f1a7bb9cc50bd206c3786ef524072f3f59a40935492b5c0b49b6a6e',
  '0x511d369c08655753aa5d8aa253e184f1a50ee4e28bd644c9b2a19213b8dcbf2d',
  '0x18e043532e3610ac9fecc93191d4eabc927e3a4e0acf2de49a73c377e23d58cb',
  '0x553cde532aa3d896ef4333326a69a858369ecb4b5dd28cf4f3c8fb6370c55db8',
  '0xabb3b40f70a559bdb5a113babbbc4ce64877684e1456669a19d63f4218357d39',
  '0x6e695e271f5d071c1eff679273ec289c3a86a03dcbf2b71c550d1c57d976786a',
  '0xb1f8339971f985a0ae682db6b4359ae576c5b6caa30f9cf36e530aaf839d538f',
  '0xd6ba91b0ae3a67e0666883ce36d299e6bb6fdf9b034832323a62fcbd92d58a0e',
  '0x0e108fa96e10aa41404de4bd6f521fcd3dcb141b61afec79852b178a7bc96ff2',
  '0x57771f65ee68c97341f8014c4447b2df1daacd56c68c763a4ad38f1c41885ac0',
  '0x7be8046729fcb58f5e06d5627bb994fd3a7ee07b07c45e94d9e66f36006a262e',
  '0x184b518e35d0ed4645bb2b2685a415b0bd4b9ee66b0c1f93b70552ed223b19aa',
  '0x95dd7ab098fb70baa2f22df683bcabce6bbbc3811363ae20700211476fc18263',
  '0xd91a0ed0006ef1972797eb888bef30870bdbababb7e48cd12922aaa72366c70a',
  '0xa120a255b8743b3cb7b2fe56e9bf2bc0006518b296973bbf5fed6154c9c421d4',
  '0xa770e0d9ba28bddee47a2b4c4f921fc9a98fb619aec79339efbda81a18b23a1b',
  '0xb249e3777467ad29a94f44e2f8fc56ecc469625078a1d660433106b9d50b38ed',
  '0x04cfda172f30bbf582957e742c6bc4a11a2b6857971b17b5eebc0dd50f6e4186',
  '0x9dd505141acd870ce1004bd56eed04d30e9859219050434ae21fa00c9ee93d7c',
  '0x380035c419aa7961bfc4574e222b16c3e0455118b37db35f15d6ce157d05a947',
  '0x4aca38a27f83f2d848f01f0964fea8ce1fbf50a3edaaf540d650e462bced33bc',
  '0xc96506330fea467943ab8fee700de6a5deeddbce26d93b79f0292338daa3200d',
  '0x0fa9dd2030e00a9a8c8ae4278d221ac6ced3e3e4738f1aefa8153753732c74eb',
  '0xd36d87f22f0eb019b7eadc6e3d39e17e2c542607fdab7cf0cce65ec72875fca7',
  '0x149b5f9eacb9f23d0550a8711496c7758f3b1d2a730021bd5afb7dc74aa5bd80',
  '0x409c9957c69a6d1c5bd0729775084acf7baeb2f48a39ab0de6cca2879746421e',
  '0x0781dc10e22f8d666a5fd3bf28a63845a446fe0833780ae45210508e5343800e',
  '0xc75e212d67e14cc80229578e2b7fa0fd80876dd08eb142a91b79340b38b42366',
  '0x43ac58fed165aeeb7d35bbc1121a5cb285654ff9107af222f15bac959f46bbc9',
  '0xd6f18abbba8bdfe7c9f00c85adc60b63ab8844d5f553c6d8bd783cef62dc933c',
  '0x2c909f088d6f58bef89e883ec83669d128bd11b11e99143f27469d99a2e05a44',
  '0x2fd072a86d7872cde728dd016ceb75ed14055135cd065e1d4f137031024516b9',
  '0x17d407942057331afaf34621fe220a2864052d048643f3d6e40212f740cc7331',
  '0x4a66c46e7041ebddab159fdb1829a182a850107ac647990b475cfa61293437a8',
  '0x6a27a3366282586ca6128458e027b7f4892a178bc3bfa505c8be674e73cb1f7e',
  '0x0c366fde353a1986622fce6f1aed8dccfda073faaf2fe8c58c6b33a9f993ad07',
  '0x0b72960f1156aefc67d2a3d0cd536c5801632e2c08a90ce768ab087133827323',
  '0xbfed7f90cc2ec3b252160ecedf6162b0cef01848491dbaaef5987d837ea0a23e',
  '0x5032d311b799a18d93f3ec9ac8553669578c4dccfe63cfb37949b770c03bc222',
  '0xf5388df5cbdef7bd1c3d8c1dc6dd478d67197bd887c4f040123ff81d52d19eef',
  '0x9d3d5ea6ccf4ddee8a87e94abc5252818921c77936582d57bd4aab20e141f6ec',
  '0xfc4b9eb2b2b9b03c2f27db8cc2bbe6eed330f042f054ab6d83a5182ef7dcfe24'
]

task('batch-buy-lottery', '批量购买彩票').addParam('amount', '金额').setAction(async (taskArguments, hre) => {
  for (let i = 0; i < accounts.length; i++) {
    const artifact = await artifacts.readArtifact('EtherLotto')
    const contract = new hre.ethers.Contract(getEnvVariable('CONTRACT_ADDRESS'), artifact.abi, new hre.ethers.Wallet(accounts[i], new hre.ethers.providers.WebSocketProvider('http://localhost:8545')))

    const number = Math.floor(Math.random() * (100 - 1)) + 1
    const params = [
      number,
      {
        value: hre.ethers.utils.parseEther(taskArguments.amount)
      }
    ]
    await contract.callStatic.buyLottery(...params)
    const transactionResponse = await contract.buyLottery(...params)

    console.log(`购买第 ${i + 1} 张彩票完成[${taskArguments.amount} ETH 玩法 号码 ${number}]: ${transactionResponse.hash}`)
  }
})
