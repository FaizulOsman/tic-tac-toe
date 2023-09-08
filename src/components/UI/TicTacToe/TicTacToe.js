import React from "react";

const TicTacToe = () => {
  return (
    <div>
      <div class="game-container flex flex-col justify-center items-center">
        <div class="turn">
          <div class="your-turn">
            <h1>Your Turn (X) : </h1>
          </div>
          <div class="my-turn">
            <h1>My Turn (O) </h1>
          </div>
        </div>
        <div class="game grid grid-cols-3 gap-0">
          <div class="col border-b border-r">
            <button class="my-btn"></button>
          </div>
          <div class="col border-b border-r">
            <button class="my-btn"></button>
          </div>
          <div class="col border-b">
            <button class="my-btn"></button>
          </div>
          <div class="col border-b border-r">
            <button class="my-btn"></button>
          </div>
          <div class="col border-b border-r">
            <button class="my-btn"></button>
          </div>
          <div class="col border-b">
            <button class="my-btn"></button>
          </div>
          <div class="col border-r">
            <button class="my-btn"></button>
          </div>
          <div class="col border-r">
            <button class="my-btn"></button>
          </div>
          <div class="col">
            <button class="my-btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
