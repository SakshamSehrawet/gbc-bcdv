## Vanity Ethereum Address
- In a language of your choice, write a program to find a private key with a corresponding Ethereum address that starts with "0x1234".
- Make sure you generate your private key safely!
- Make sure your random number is actually a valid private key
- HINT: Use the [ethereumjs-util](https://www.npmjs.com/package/ethereumjs-util) JavaScript package
- Don't use the privateToAddress method. Instead, use privateToPublic and keccak256 so you demonstrate you understand the address -generation process, and practice hashing and the use of buffers
# Extra to think about: Assuming keccak256(x) is uniformly distributed, what is the probability your neighbour generates the same address as you?

To compute an ethereum address from a public key:
Hash public key with keccak256 (giving 32 bytes)
Take last 20 bytes of hash
Encode as hexadecimal
Prefix with "0x"
Optional: Compute checksum
