import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const itemlist = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };
  const deleteitem = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrayEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1> TO DO LIST</h1> <br />
          <input
            type="text"
            value={inputList}
            placeholder="Add a Items"
            onChange={itemEvent}
          />
          <button onClick={itemlist}> + </button>
          <ol>
            {items.map((itemval, index) => {
              return (
                <ToDoList
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteitem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
