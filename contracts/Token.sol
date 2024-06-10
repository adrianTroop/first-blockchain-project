// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

//Developer purpose
import "hardhat/console.sol";

contract Token {
    string public name;
    string public symbol;
    //Uint means not negative
    uint256 public decimals = 18;
    uint256 public totalSupply;

    //Tracking balances KEY VALUE pairs
    mapping(address => uint256) public balanceOf;
    //Send Tokens

    constructor(string memory _name, string memory _symbol, uint256 _totalSupply) {
        name =_name;
        symbol = _symbol;
        totalSupply = _totalSupply * (10**decimals);
        balanceOf[msg.sender] = totalSupply;
    }
}
