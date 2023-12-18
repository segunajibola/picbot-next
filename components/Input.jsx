"use client";

import React, { useState } from "react";

const Input = () => {
  const [term, setTerm] = useState();

  //   function search() {
  //     fetch("");
  //   }

  return (
    <div className="flex justify-center items-center flex-col gap-3 m-5">
      <h2 className="text-xl">What picture do you want to see?</h2>
      <form className="flex justify-center gap-7 m-3 w-full">
        <input
          type="text"
          value={term}
          placeholder="input picture name"
          className="py-3 px-20 rounded-lg outline-none"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="bg-gray-500 rounded-xl p-5 text-xl">Search</button>
      </form>
      <h2 className="text-xl">Click each image to see more details.</h2>
    </div>
  );
};

export default Input;
