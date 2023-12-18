"use client";

import React, { useState } from "react";

const Input = ({ updateTerm }) => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    updateTerm(text);
  }

  return (
    <div className="flex justify-center items-center flex-col gap-3 m-5">
      <h2 className="text-xl">What picture do you want to see?</h2>
      <form
        className="flex justify-center gap-7 m-3 w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={text}
          placeholder="input picture name"
          className="py-3 px-20 rounded-lg outline-none"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="bg-white rounded-xl p-3 text-xl">
          Search
        </button>
      </form>
      <h2 className="text-xl">Click each image to see more details.</h2>
    </div>
  );
};

export default Input;
