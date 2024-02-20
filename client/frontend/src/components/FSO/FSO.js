// Import necessary React and CSS modules
import React, { useState } from "react";
import "../../styles/Home.css";

const FSO = () => {
  // State for dropdown values
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");

  // State for first table
  const [table1Data, setTable1Data] = useState([]);
  const [colorOptions, setColorOptions] = useState([
    "Algae Meal, Dried",
    "Annatto Extract / Annatto",
    "Antarctic krill meal",
    "Astaxanthin",
    "Astaxanthin Dimethyldisuccinate",
    "Beet Juice",
    "Beet Powder and Dehydrated Beets",
    "β-apo-8'-carotenal",
    // Add more colors as needed
  ]);

  // State for second table
  const [table2Data, setTable2Data] = useState([]);
  const [substanceOptions, setSubstanceOptions] = useState([
    "ACACIA, GUM (ACACIA SENEGAL (L.) WILLD.)",
    "ACAI BERRY EXTRACT",
    "ACESULFAME POTASSIUM",
    "ACETAL",
    "ACETALDEHYDE",
    "ACETALDEHYDE, BUTYL PHENETHYL ACETAL",
    "ACETALDEHYDE DI-CIS-3-HEXENYL ACETAL",
    // Add more substances as needed
  ]);
  const [selectedSubstances, setSelectedSubstances] = useState([]);

  // Function to handle company change and update products
  const handleCompanyChange = (selectedCompany) => {
    setCompany(selectedCompany);
    // Clear selected product when changing company
    setProduct("");
  };

  // Function to handle adding or removing a color from the table
  const handleAddColorToTable = (color) => {
    const isColorSelected = table1Data.some((entry) => entry.color === color);

    if (isColorSelected) {
      // Remove color from the table if it was selected
      const updatedTableData = table1Data.filter((entry) => entry.color !== color);
      setTable1Data(updatedTableData);
    } else {
      // Add color to the table if it was not selected
      setTable1Data([...table1Data, { color, comment: "" }]);
    }
  };

  // Function to handle adding a comment to the selected color
  const handleAddComment = (color, comment) => {
    const updatedTableData = table1Data.map((entry) =>
      entry.color === color ? { ...entry, comment } : entry
    );

    setTable1Data(updatedTableData);
  };

  // Function to handle adding or removing a substance from the table
  const handleAddSubstanceToTable = (substance) => {
    const isSubstanceSelected = table2Data.some((entry) => entry.substance === substance);

    if (isSubstanceSelected) {
      // Remove substance from the table if it was selected
      const updatedTableData = table2Data.filter((entry) => entry.substance !== substance);
      setTable2Data(updatedTableData);
    } else {
      // Add substance to the table if it was not selected
      setTable2Data([...table2Data, { substance, comment: "" }]);
    }
  };

  // Function to handle submitting the form
  const handleSubmit = () => {
    // Implement your logic to save the data
    console.log("Table 1 Submitted:", table1Data);
    console.log("Table 2 Submitted:", table2Data);
  };

  return (
    <div className="your-container">
      {/* Company Dropdown */}
      <div className="dropdown-container">
        <label htmlFor="companyDropdown" className="text-sm mr-2">
          Company:
        </label>
        <select
          id="companyDropdown"
          value={company}
          onChange={(e) => handleCompanyChange(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          {/* Add options for company names */}
          <option value="Lays">Lays</option>
          <option value="Pepsi">Pepsi</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Color Checkbox Group */}
      <div className="dropdown-container">
        <label htmlFor="colorCheckboxGroup" className="text-sm mr-2">
          Select Colors:
        </label>
        <div className="flex flex-wrap">
          {colorOptions.map((color) => (
            <label key={color} className="mr-4">
              <input
                type="checkbox"
                value={color}
                checked={table1Data.some((entry) => entry.color === color)}
                onChange={() => handleAddColorToTable(color)}
                className="mr-1"
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      {/* Substance Checkbox Group */}
      <div className="dropdown-container mt-4">
        <label htmlFor="substanceCheckboxGroup" className="text-sm mr-2">
          Select Substances:
        </label>
        <div className="flex flex-wrap">
          {substanceOptions.map((substance) => (
            <label key={substance} className="mr-4">
              <input
                type="checkbox"
                value={substance}
                checked={selectedSubstances.includes(substance)}
                onChange={() => {
                  const updatedSubstances = selectedSubstances.includes(substance)
                    ? selectedSubstances.filter((s) => s !== substance)
                    : [...selectedSubstances, substance];

                  setSelectedSubstances(updatedSubstances);
                  handleAddSubstanceToTable(substance);
                }}
                className="mr-1"
              />
              {substance}
            </label>
          ))}
        </div>
      </div>

      {/* First Table with Color, Comment */}
      <div className="table-container">
        {/* Table */}
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Color</th>
              <th className="border border-gray-300 p-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {table1Data.map((entry, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{entry.color}</td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={entry.comment}
                    onChange={(e) => handleAddComment(entry.color, e.target.value)}
                    placeholder="Add Comment"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Second Table with Substance, Comment */}
      <div className="table-container">
        {/* Table */}
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Substance</th>
              <th className="border border-gray-300 p-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {table2Data.map((entry, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{entry.substance}</td>
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={entry.comment}
                    onChange={(e) => handleAddComment(entry.substance, e.target.value)}
                    placeholder="Add Comment"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FSO;
