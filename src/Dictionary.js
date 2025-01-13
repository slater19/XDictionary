import {  useState } from "react";
import MeanigList from "./meaniglist";


const Dictionary = () => {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState(
    [
    
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
    
        { word: "Component", meaning: "A reusable building block in React." },
    
        { word: "State", meaning: "An object that stores data for a component." }
    
    ]
    
    );
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  }

  const handleInputKeyDown = (e) => {
    if(e.key === 'Enter') {
      setInputValue(value);
      setValue("")
    }
  }

  const filtered = response.filter(response => response.word.toLowerCase().includes(inputValue.toLowerCase()));
console.log(filtered)
  return (
    <div >
      <div >
        <h1 style={{fontWeight:"bold"}}> Dictionary App</h1>
        
      
        
          
            <input type="text" placeholder="Search for a word.." onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown} />
            <button style={{fontWeight:"bold"}}  onClick={handleSubmit}>Search</button>
          
        
   <p style={{fontWeight:"bold",}}>Definition:</p>
       
        { inputValue && filtered.length?
           <MeanigList mean={filtered}  />
        :<p>Word not found in the dictionary.</p> }
      </div>
    </div>
  );
};

export default Dictionary;