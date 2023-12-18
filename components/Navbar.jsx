import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="font-semibold p-2 text-2xl">Picbot</h1>
      <FaGithub size={30} />
    </div>
  );
};

export default Navbar;
