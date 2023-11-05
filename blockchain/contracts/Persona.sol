```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Persona is ERC721, Ownable {
    uint256 private _tokenIds;

    struct PersonaData {
        string name;
        string attributes;
    }

    mapping(uint256 => PersonaData) private _personaData;

    constructor() ERC721("Persona", "PSN") {}

    function mintPersona(address to, string memory name, string memory attributes) public onlyOwner returns (uint256) {
        _tokenIds += 1;
        uint256 newPersonaId = _tokenIds;

        _mint(to, newPersonaId);
        _personaData[newPersonaId] = PersonaData(name, attributes);

        return newPersonaId;
    }

    function getPersonaData(uint256 tokenId) public view returns (string memory name, string memory attributes) {
        require(_exists(tokenId), "ERC721: Query for nonexistent token");

        PersonaData storage persona = _personaData[tokenId];
        return (persona.name, persona.attributes);
    }
}
```