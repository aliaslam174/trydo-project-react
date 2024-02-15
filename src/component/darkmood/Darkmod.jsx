import React, { useEffect } from 'react'
import  { useState } from 'react';
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
function Darkmod() {
    const [theme, setTheme] = useState(false);


    useEffect(() => {
        let isDark = localStorage.getItem("isDark");
        if (isDark == 'true') {
          document.documentElement.classList.add('dark');
          setTheme("true");
        }
      }, [])

      const toggleDarkMode = () => {
        let isDark = localStorage.getItem("isDark");
        if (isDark == null || isDark == 'false') {
          localStorage.setItem('isDark', true);
          document.documentElement.classList.add('dark');
          setTheme("true");
        } else {
          localStorage.setItem('isDark', false);
          document.documentElement.classList.remove('dark');
          setTheme(null);
        }
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