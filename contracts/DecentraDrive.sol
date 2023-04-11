// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract DecentraDrive { 
    
    struct Access {
        address user; // user address
        bool access; // access to a particular user
    }

    mapping(address => string[]) value; // to store the URL
    mapping(address => mapping(address => bool)) ownership; // nested mapping of ownership rights
    mapping(address => Access[]) accessList; // array that lists ownership rights
    mapping(address => mapping(address => bool)) previousData;

    /// @dev Utilizes the value mapping for pointing to a URL within the array
    function addIMG(address _user, string calldata url) external {
        value[_user].push(url);
    }

    // @dev msg.sender is given user drive access rights
    function allowUser(address user) external {
        ownership[msg.sender][user] = true; // msg.sender allows ownership access rights to a particular user address
        if(previousData[msg.sender][user]==true) {
            // allows msg.sender to change the user address access 
            // once a user address has been added to the list
            for(uint i = 0; i < accessList[msg.sender].length; i++) {
                if(accessList[msg.sender][i].user == user) {
                    accessList[msg.sender][i].access = true;
                }
            }
        } else {
            accessList[msg.sender].push(Access(user, true));
            previousData[msg.sender][user] = true;
        }
    }

    function disallowUser(address user) external {
        ownership[msg.sender][user] = false;
        for (uint i = 0; i < accessList[msg.sender].length; i++) {
            if(accessList[msg.sender][i].user == user) {
                accessList[msg.sender][i].access = false;
            }
        }
    }

    function display(address _user) external view returns(string[] memory) {
        require(_user == msg.sender || ownership[_user][msg.sender], "You don't have access");
        return value[_user];
    }

    function shareAccess() public view returns(Access[] memory) {
        return accessList[msg.sender];
    }
}