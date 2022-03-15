//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

contract TipJar{
    address public owner;

    event OwnershipTransfer(address indexed _from,address indexed _to,uint256 indexed _at);
    event ReceivedTip(address indexed _from,uint256 indexed _amount,uint256 indexed _at);
    event HandInJar(address _by,uint256 _amount);

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner {
        require (msg.sender == owner,"Only owner can perform this action");
        _;
    }

    function ChangeOwner(address newOwner) external onlyOwner {
        emit OwnershipTransfer(owner,newOwner,block.number);
        owner = newOwner;
    }

    function Withdraw(uint256 amount) external onlyOwner{
        require(amount<= address(this).balance,"Not enough funds");
        payable(msg.sender).transfer(amount);
        emit HandInJar(msg.sender,amount);
    }

    function JarBalance() view external returns(uint256) {
        return address(this).balance;
    }

    receive() external payable{
        emit ReceivedTip(msg.sender,msg.value,block.number);
    }

    fallback() external payable{
        require(false,"I don't know what to do for that call data");
    }
}