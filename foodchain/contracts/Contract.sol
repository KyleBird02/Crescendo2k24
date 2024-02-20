// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductRegistry {
    address public owner;
    
    enum Role { User, FSO }
    mapping(address => Role) public roles;

    struct Product {
        address sender;
        string companyName;
        string productName;
        string[] substanceNames;
        string[] substanceMeasurements;
        string date;
    }
    
    mapping(uint256 => Product) public products;
    uint256 public totalProducts;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }
    
    modifier onlyFSO() {
        require(roles[msg.sender] == Role.FSO, "Only addresses with FSO role can call this function");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    function setRole(address _address, Role _role) public onlyOwner {
        roles[_address] = _role;
    }
    
    function getRole(address _address) public view returns (Role) {
        return roles[_address];
    }
    
    function addProduct(
        string memory _companyName, 
        string memory _productName, 
        string[] memory _substanceNames, 
        string[] memory _substanceMeasurements,
        string memory _date
    ) public onlyFSO {
        require(_substanceNames.length == _substanceMeasurements.length, "Arrays length mismatch");
        
        products[totalProducts] = Product(
            msg.sender,
            _companyName,
            _productName,
            _substanceNames,
            _substanceMeasurements,
            _date
        );
        totalProducts++;
    }
    
    function getAllProducts() public view returns (Product[] memory) {
        Product[] memory allProducts = new Product[](totalProducts);        
            for (uint256 i = 0; i < totalProducts; i++) {
                allProducts[i] = products[i];
            }
        
        return allProducts;
    }
}