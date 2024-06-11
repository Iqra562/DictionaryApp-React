import React, { useState, useEffect } from "react";
import ApiContext from "./ApiContext";

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [inputError,setInputError] = useState("")

  useEffect(() => {

    if(!keyword){
setInputError("Input feild is empty");
return
    }else{
      setInputError("")
    } 
const getPost = async () => { 
  
  
      try {
        const category = 'en'; 

        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${keyword}`);
       
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await res.json();
        setData(result);
        setError(""); 
        // console.log(result, "result"); 
      } catch (error) {
        // console.error("There has been a problem with  fetch operation:",error);
        setError("There has been a problem with your fetch operation: 00" + error.message); // Set the error state
        // setInputError("Word not found")
      }
    }; 

    if (keyword) {
      getPost(); 
    }
     }, [keyword]);  

  return (
    <ApiContext.Provider value={{ data, error, keyword, setKeyword, darkMode, setDarkMode }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
