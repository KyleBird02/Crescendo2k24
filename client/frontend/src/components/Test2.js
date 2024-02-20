import React, { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Test2() {
  const { contract } = useContract("0xb5e7BbeAcA7154F8E3AaB641eC4DdD1Bde9Ba5DF");
  const { mutateAsync: addProduct, isLoading } = useContractWrite(contract, "addProduct");
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [substanceNames, setSubstanceNames] = useState([]);
  const [substanceMeasurements, setSubstanceMeasurements] = useState("");
  const [date, setDate] = useState("");


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const call = async(companyName, productName, substanceNames, substanceMeasurements, date) => {
    try{
      const data = await addProduct({
        args: [companyName, productName, substanceNames, substanceMeasurements, "tygytf"],
      });
    }catch (err) {
      console.error("contract call failure", err);
  }
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await call(companyName, productName, substanceNames, substanceMeasurements, date)
      console.info("Contract call success");
      // Optionally, you can reset input fields or perform other actions upon success
    } catch (err) {
      console.error("Contract call failure", err);
      // Optionally, handle errors or provide user feedback
    }
  };

  const handleSubstanceValuesChange = (index, value) => {
    const newSubstanceValues = [...substanceMeasurements];
    newSubstanceValues[index] = value;
    setSubstanceMeasurements(newSubstanceValues);
  };
  
  return (
    <div>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={["Kurkure","Brittania"]}
      style={{ backgroundColor: "red" }}
      sx={{ width: 300 }}
      onChange={(event, newValue) => {
        setCompanyName(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Manufacturer" />}
    />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={companyName==="Kurkure"?["Chilli Chatka","Hyderabadi Hungama"]:companyName==="Brittania"?["Chocochip Cookies","Cashew Cookies","Pista Cookies","Hazelnut Cookies","Butter Cookies"]:[]}
      style={{ backgroundColor: "red" }}
      sx={{ width: 300 }}
      onChange={(event, newValue) => {
        setCompanyName(newValue);
      }}
      renderInput={(params) => <TextField {...params} label="Product" />}
    />
        <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={["Acetaldehyde","Butter","Sugar","Yeasts","Verbanol","Whey","Vanillin","Turpentine","Caramel","FD&C Yellow No.6","Spirulina Extract","Salt","Tomato Extract","Vegetable Juice","FD&C Red No.2","Thymol","Toluene","Chilli Powder","FD&C Red No.3"]}
      disableCloseOnSelect
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: 500 , backgroundColor: "red"}}
      onChange={(event, value) => setSubstanceNames(value)}
      renderInput={(params) => (
        <TextField {...params} label="Additives" placeholder="Substances and Colouring Agents" />
      )}
    />
    <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {substanceNames.map((name, index) => (
              <TableRow key={index}>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <TextField
                    value={substanceMeasurements[index]}
                    onChange={(e) => handleSubstanceValuesChange(index, e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button onClick={handleAddProduct} disabled={isLoading}>
        {isLoading ? "Adding Product..." : "Add Product"}
      </button>
    </div>
  );
}
