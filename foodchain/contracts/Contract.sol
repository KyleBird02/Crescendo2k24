// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductRegistry {
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
    uint256 public totalCompanies;
    
    function addProduct(
        string memory _companyName, 
        string memory _productName, 
        string[] memory _substanceNames, 
        string[] memory _substanceMeasurements,
        string memory _date
    ) public {
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