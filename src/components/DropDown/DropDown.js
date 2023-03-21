import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./app.css";
function DropDown() {
  const menuArray = [
    {
      id: 1,
      name: "Menu 1",
    },
    {
      id: 2,
      name: "Menu 2",
    },
    {
      id: 3,
      name: "Menu 3",
    },
  ];
  const [dropMenu, setDropMenu] = useState(false);

  function handleClick(){
     setDropMenu(!dropMenu)
  }

  return (
    <Link to="/dropdown">
      <div className="dropdown-body">
        <button className="drop-btn" onClick={handleClick}>{dropMenu === true ? 'Dropdown' : 'Dropup'}</button>
        {dropMenu &&
        <ul className="drop-menu">
          {menuArray.map((menu) => (
            <div key={menu.id}><li className="drop-li">{menu.name}</li></div>    
          ))}
        </ul>
}
      </div>
    </Link>
  );
}

export default DropDown;
