const { ethers } = require('ethers')
const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545')

new ethers.Wallet(
  '4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d',
  provider,
).sendTransaction({
  to: '0x0d5A6f8C147c049685DBE08BE4b9dc594bdC0CAB',
  value: ethers.utils.parseUnits('1.0', 18),
})
