import React from "react";

const TicTacToe = () => {
  return (
    <div>
      <div className="game-container flex flex-col justify-center items-center">
        <div className="turn">
          <div className="your-turn">
            <h1>Your Turn (X) : </h1>
          </div>
          <div className="my-turn">
            <h1>My Turn (O) </h1>
          </div>
        </div>
        <div className="game row row-cols-3 m-0">
          <div className="col border-bt border-rt">
            <button className="my-btn"></button>
          </div>
          <div className="col border-bt border-rt">
            <button className="my-btn"></button>
          </div>
          <div className="col border-bt">
            <button className="my-btn"></button>
          </div>
          <div className="col border-bt border-rt">
            <button className="my-btn"></button>
          </div>
          <div className="col border-bt border-rt">
            <button className="my-btn"></button>
          </div>
          <div className="col border-bt">
            <button className="my-btn"></button>
          </div>
          <div className="col border-rt">
            <button className="my-btn"></button>
          </div>
          <div className="col border-rt">
            <button className="my-btn"></button>
          </div>
          <div className="col">
            <button className="my-btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
