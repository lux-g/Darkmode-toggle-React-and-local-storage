import React, { useState } from "react";
import '../pages/Index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


const IndexPage = () => {

  const [darkMode, setDarkMode] = useState(getInitialMode());
  React.useEffect(()=> {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])
  
  const [icon, setIcon] = useState(false);

  function getInitialMode(){
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  function changeMode(){
    setDarkMode(!darkMode)
    setIcon(!icon)
  }



  return (
    <div id="main" className={darkMode ? 'dark-mode' : 'light-mode'}>
      <FontAwesomeIcon className="fa-icon" icon={icon ? faSun : faMoon} size="2x" onClick={changeMode}/>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempore perferendis et possimus architecto voluptates ducimus reprehenderit nesciunt nam enim.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempore perferendis et possimus architecto voluptates ducimus reprehenderit nesciunt nam enim.</p>
    </div>
  )
}

export default IndexPage
