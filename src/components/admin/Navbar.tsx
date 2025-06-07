import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-100 to-yellow-100 text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </nav>
  );
};

export default Navbar;
