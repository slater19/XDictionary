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

  const filtered = response.filter(response => response.word.includes(inputValue));
console.log(filtered)
  return (
    <div style={{fontWeight:"bold",textAlign: 'center',}}>
      <div style={{fontWeight:"bold",textAlign: 'center',}}>
        <h1 style={{fontWeight:"bold",textAlign: 'center',}}> Dictionary App</h1>
        {/* <p className="text-center mt-1 mb-10 text-slate-300 text-lg">Find definisions for word</p> */}
      
        <div style={{fontWeight:"bold",textAlign: 'center',}}className="flex items-center justify-center mt-5">
          <div style={{fontWeight:"bold",textAlign: 'center',}}className="flex border-2 border-gray-200 rounded">
            <input style={{fontWeight:"bold",}} className="px-4 py-2 md:w-80" type="text" placeholder="Search for a word.." onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown} />
            <button style={{fontWeight:"bold",textAlign: 'center',}} className="bg-blue-400 border-l px-4 py-2 text-white" onClick={handleSubmit}>Search</button>
          </div>
        </div>
   <p style={{fontWeight:"bold",textAlign: 'center',}}className="font-bold text-center mt-1 mb-10 text-slate-300 text-lg">Definition</p>
       <br/>
        { inputValue ?
           <MeanigList mean={filtered}  />
        :<div> Word not found in the dictionary </div> }
      </div>
    </div>
  );
};

export default Dictionary;