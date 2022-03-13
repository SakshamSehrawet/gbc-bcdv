const randomBytes = require('randombytes');
const util = require('ethereumjs-util')
const keccak256 = require('keccak256');

const getValidRand32 = () => {
    let rand32 = randomBytes(32)
    if (util.isValidPrivate(rand32)){
        
        return (rand32);
    }else{
        console.log(counter++)
        return (getPrivateKey());
    }
}

const genWallet = () => {
    let pvtKey = getValidRand32()
    let pubKey = util.privateToPublic(pvtKey)
    let address = '0x' + keccak256(pubKey).slice(12).toString('hex');
    return{pvtKey: '0x' +pvtKey.toString('hex'),pubKey: '0x' +pubKey.toString('hex'),address: address};
}

const getVanityAddress = () => {
    let counter = 0
    while(1){
        counter++
        let vanityAddress = genWallet()
        if(vanityAddress.address.slice(2,6) == '1234'){
            console.log(`Tried ${counter} random keys`)
            return(vanityAddress)
        }
        else{
            continue;
        }
    }
}

console.log(getVanityAddress())
