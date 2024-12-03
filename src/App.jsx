// Importing necessary styles and components
import "./App.css"; // Importing CSS styles for the application
import * as React from "react"; // Importing React library
import Button from "@mui/material/Button"; // Importing Button component from Material-UI
import TextField from "@mui/material/TextField"; // Importing TextField component from Material-UI
import { useState } from "react"; // Importing useState hook from React for managing state

// Main functional component of the application
function App() {
  // State variable to hold the text that the user pastes into the TextField
  const [pastedText, setPastedText] = useState("");

  // State variable to hold the list of extracted email addresses
  const [pastedEmails, setPastedEmails] = useState([]);

  // Function to handle the paste event
  const handlePaste = (event) => {
    // Get the text that was pasted from the clipboard
    const text = event.clipboardData.getData("text");

    // Update the pastedText state with the pasted text
    setPastedText(text);
  };

  // Function to extract email addresses from the pasted text
  const extractEmails = () => {
    // Regular expression to match email addresses in the pasted text
    const collectEmailAddress = pastedText.match(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    );

    // Update the pastedEmails state with the extracted email addresses
    // If no emails are found, set it to an empty array
    setPastedEmails(collectEmailAddress || []);
  };

  // Render the UI components
  return (
    <>
      <div className="header">
        <h1>Email Extractor</h1> {/* Header for the application */}
      </div>
      <div className="textpaste" style={{ color: "white" }}>
        <TextField
          id="outlined-basic" // Unique identifier for the TextField
          label="Paste Your Text Here" // Label for the TextField
          variant="outlined" // Style variant for the TextField
          onPaste={handlePaste} // Attach the handlePaste function to the onPaste event
          type="text" // Input type
        />
      </div>
      <Button
        variant="contained" // Style variant for the Button
        disableElevation // Disable elevation effect on the button
        style={{ marginTop: "20px" }} // Inline style for margin
        onClick={extractEmails} // Attach the extractEmails function to the onClick event
      >
        Extract {/* Button text */}
      </Button>
      <div className="showextractedemail">
        <ul>
          {" "}
          {/* Unordered list to display extracted email addresses */}
          {pastedEmails.map((email, index) => (
            <li key={index}>{email}</li> // Render each email inside a list item
          ))}
        </ul>
      </div>
    </>
  );
}

// Export the App component as the default export
export default App;
