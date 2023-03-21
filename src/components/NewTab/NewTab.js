import React from "react";
import { Link } from "react-router-dom";
import "./newtab.css";

function NewTab() {
    function handleChangeTab(){
        window.open('https://www.google.com, _blank')
    }
  return (
    <Link to="/newtab">
      <div className="newtab">
       <h3>Click Button Below To download</h3>
       <p>You will be directed to a new tab</p>
        <button className="new-btn" onClick={handleChangeTab}>Download</button>
      </div>
    </Link>
  );
}

export default NewTab;
