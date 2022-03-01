//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions{
    uint256 count;     //no. of transactions

    event Transfer(address from , address receiver , uint amount ,  string message , uint timestamp , string keyword);

    struct transferStruct{
        address from;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    transferStruct[] transactions;

    function addToBlockchain(address payable receiver , uint amount , string memory message , string memory keyword) public {
        count += 1;
        transactions.push(transferStruct(msg.sender , receiver , amount , message , block.timestamp , keyword));

        emit Transfer(msg.sender , receiver , amount , message , block.timestamp , keyword);

    }

    function getAllTransactions() public view returns(transferStruct[] memory) {
        return transactions;
    }

    function getTransactionsCount() public view returns(uint256) {
        return count;
    }
}