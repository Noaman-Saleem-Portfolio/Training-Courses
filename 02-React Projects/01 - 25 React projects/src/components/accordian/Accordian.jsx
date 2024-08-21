import React, { useState } from "react";
import data from "./data";

import "./accordian.css";

const Accordian = () => {
  // console.log(data);
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currentItemId) => {
    console.log(`Item ${currentItemId} Clicked!`);
    setSelected(selected === currentItemId ? null : currentItemId);
  };

  const handleMultiSelection = (currentItemId) => {
    console.log("Hello from handleMultiSelection");
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(currentItemId);
    // console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMutiple.push(currentItemId);
    } else {
      cpyMutiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMutiple);
  };

  //   console.log(enableMultiSelection);

    console.log(multiple);

  return (
    <div className="accordian">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="btn"
      >
        Enable Multi Selection
      </button>
      {data.map((item) => {
        return (
          <div
            onClick={
              enableMultiSelection
                ? () => handleMultiSelection(item.id)
                : () => handleSingleSelection(item.id)
            }
            className="item"
            key={item.id}
          >
            {/* question */}
            <div className="question">
              <h4>{item.question}</h4>
              <p>+</p>
            </div>

            {enableMultiSelection
              ? multiple.indexOf(item.id) !== -1 && (
                  <p className="answer">{item.answer}</p>
                )
              : selected === item.id && (<p className="answer">{item.answer}</p>)}

            {/* answer */}
            {/* {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
              <p className="answer">{item.answer}</p>
            ) : null} */}
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
