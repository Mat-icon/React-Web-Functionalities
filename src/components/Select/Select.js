import React, { useState } from "react";
import "./select.css";

import selectArray from "./SelectArray";

function Select() {
  const [arrays, setArray] = useState(null);

  function handleClick(array) {
    setArray(array);
  }

  return (
      <div className="select-body">
        <div className="select-item">
          <div className="select-grid">
            {selectArray.map((array) => (
              <div
                className="select-card"
                key={array.id}
                onClick={() => handleClick(array)}
              >
                <div className="select-image">
                  <img src={array.image} alt="" />
                </div>
                  <h3>{array.name}</h3>
                  <p>{array.description}</p>
                </div>
            ))}
          </div>
        </div>
        {arrays && (
          <div className="selected">
            <div className="selected-img">
              <img src={arrays.image} alt=''/>
            </div>
            <div className="selected-text">
              <h1>{arrays.name}</h1>
              <div className="selected-des">{arrays.description}</div>
            </div>
          </div>
        )}
      </div>
  );
}

export default Select;
