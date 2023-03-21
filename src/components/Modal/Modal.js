import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(0);
  function handleClick(show) {
    setShowModal(show);
  }
  const Yes = () => (
    <div className="modal-body">
      <div className="modal-yes">You have completed the process!!</div>
      <div className="modal-btn">
        <button className="yes" onClick={()=> handleClick(0)}>Back</button>
      </div>
    </div>
  );
  const No = () => (
    <div className="modal-body">
      <div className="modal-yes">You have cancelled the process</div>
      <div className="modal-btn">
        <button className="yes" onClick={()=> handleClick(0)}>Back</button>
      </div>
    </div>
  );
  const Modal = () => (
    <div className="modal-body">
      <div className="modal-title">
        <h2>Modal</h2>
        <button className="no" onClick={()=> handleClick(3)}>Cancel</button>
      </div>
      <div className="question">
        <p>Are You Sure Personal information Is Correct?</p>
      </div>
      <div className="modal-btn">
        <button className="yes" onClick={() => handleClick(1)}>
          Yes
        </button>
        <button className="no" onClick={() => handleClick(2)}>
          No
        </button>
      </div>
    </div>
  );

  if (showModal === 0) {
    return <Modal />;
  } else if (showModal === 1) {
    return <Yes />;
  } else if (showModal === 2) {
    return <No />;
  }else if(showModal === 3) {
    return <div></div>;
  }


  return (
    <Link to="/modal">
      <div className="modal-body">{showModal}</div>
    </Link>
  );
}

export default Modal;
