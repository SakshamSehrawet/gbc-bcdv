pragma solidity ^0.5.0;

contract PersonalBank {
    address owner;
    bytes32 bankName = 0x42616e6b31323334000000000000000000000000000000000000000000000000; //Bank1234 in byres32
    mapping(bytes32 => bool) usedCheque;


    constructor() public payable {
        owner = msg.sender;
    }
    
    function() external payable {
    }
    
    function cashCheque(address payable to, uint256 amount, bytes32 chequeID,
                        bytes32 r, bytes32 s, uint8 v)
                public {
        bytes32 messageHash = keccak256(abi.encodePacked(to, amount, chequeID,bankName));
        require(usedCheque[messageHash] == false,'Cheque already used');
        usedCheque[messageHash] = true;
        
        bytes32 messageHash2 = keccak256(abi.encodePacked(
            "\x19Ethereum Signed Message:\n32", messageHash
        ));
        
        require(ecrecover(messageHash2, v, r, s) == owner, "bad signature");
        
        to.transfer(amount);
    }
}
