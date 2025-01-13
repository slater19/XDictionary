import { createContext, useState } from "react";
import Dictionary from "./Dictionary";


// Create context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue, setInputValue
  }

  return (
    
      <div className="App">
        <Dictionary />
        {/* <ResultList /> */}
      </div>
    // </InputContext.Provider>
  );
}

export default App;