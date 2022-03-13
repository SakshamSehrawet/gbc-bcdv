Creating Transactions
Using the private keys printed out when you started ganache-cli, write a script in a language of your choice to send ETH to an address. Connect to ganache-cli with metamask, send ETH to your metamask address, and verify your balance increased in the metamask interface. Include the script in your submission.
Although not required, I suggest you use node.js (JavaScript) and the ethers.js library. You can install ethers like so:
$ npm install ethers
You will need to create a new JsonRpcProvider with the URL of http://localhost:8545
Then create a new Wallet, passing in a private key and the JsonRpcProvider instance
Then call the sendTransaction method on the wallet
NOTE: Only submit the script that you wrote. Do not submit zip files or node_modules or anything else, otherwise you will receive 0 (but you can re-submit)