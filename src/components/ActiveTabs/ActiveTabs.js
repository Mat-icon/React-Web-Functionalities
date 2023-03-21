import React from "react";
import { useState } from "react";
import "./app.css";

function ActiveTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  function handleClick(tab) {
    setActiveTab(tab);
  }
  const Tab1 = () => (
    <div className="tab1--body">
        <h1>Great!</h1>
    </div>
  )
  const Tab2 = () => (
    <div className="tab2--body">
        <h1>Bravo!</h1>
    </div>
  )
  const Tab3 = () => (
    <div className="tab3--body">
        <h1>Nigga Please!!</h1>
    </div>
  )

  return (
    <div className="active-content">
      <div className="active-tab">
        <ul className="active-flex">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => handleClick('tab1')}
          >
            Tab1
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => handleClick('tab2')}
          >
            Tab2
          </li>
          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={() => handleClick('tab3')}
          >
            Tab3
          </li>
        </ul>
      </div>
      {activeTab === 'tab1' && <div><Tab1/></div>}
      {activeTab === 'tab2' && <div><Tab2/></div>}
      {activeTab === 'tab3' && <div><Tab3/></div>}
    </div>
  );
}

export default ActiveTabs;
