import React, { useState } from "react";
import "./Mode.css";
import { Link } from "react-router-dom";

function Mode() {
    const [darkMode, setDarkMode] = useState(false);

    function handleClick(){
        setDarkMode(!darkMode);
    }
  return (
    <Link to="/mode">
      <div className="mode-body">
        <div className={darkMode === true ? 'darkmode' : 'lightmode'}>
        <div className="mode-flex">
          <h2>Title</h2>
          <button onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
        <div className="mode-text">
          <p>
            Tired of being what You want me to be. I feel so numb i can hero.
            I be counting this cause can i get an encore do you want more cook it raw like the brooklyn boss.
          </p>
        </div>
        </div>
      </div>
    </Link>
  );
}

export default Mode;
