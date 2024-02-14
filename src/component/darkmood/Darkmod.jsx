import React, { useEffect } from 'react'
import  { useState } from 'react';
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
function Darkmod() {
    const [theme, setTheme] = useState(false);
    useEffect(() => {

        if (theme == false) {
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.add('dark');
        }
    
        // save in local storage
        localStorage.setItem("darkMode", theme);
    
      }, [theme]);
    const toggleDarkMode = () => {
        setTheme((theme) => !theme);
      };
  return (
    <>
    <button onClick={toggleDarkMode}
        
        className="px-4 py-4 rounded-full bg-gray-800 text-white"
      >
        {(theme == false) ? <FaMoon /> : <BsSunFill />}
      </button>
    </>
  )
}

export default Darkmod