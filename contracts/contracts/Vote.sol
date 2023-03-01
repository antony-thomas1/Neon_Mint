// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@thirdweb-dev/contracts/base/ERC20SignatureMintVote.sol";
import "@thirdweb-dev/contracts/extension/Permissions.sol";

contract Contract is ERC20SignatureMintVote, Permissions {
      bool public allowSale;
      
      constructor(
        string memory _name,
        string memory _symbol,
        address _primarySaleRecipient
    )
        ERC20SignatureMintVote(
            _name,
            _symbol,
            _primarySaleRecipient
        )
    {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function startSale(bool _allowSale) public onlyRole(DEFAULT_ADMIN_ROLE){
        allowSale = _allowSale;
    }

    function mintTo(address _to, uint256 _amount) public virtual override{
        require( allowSale == true, "Minting is currently closed!" );
        super.mintTo(_to, _amount);
    }
}