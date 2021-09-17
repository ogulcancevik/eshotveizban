import React from "react";
import IzbanLogo from "../../img/Izban-logo.jpg";

const Navbar = () => {
  return (
    <div className="w-screen">
      <div className="flex justify-center items-center">
        <img src={IzbanLogo} alt="Eshot Logo" style={{ width: "400px" }} />
      </div>

      <div className="bg-gray h-24 flex items-center text-white text-3xl font-light">
        <p className="ml-16">SEFER SAATLERİ</p>
      </div>
    </div>
  );
};

export default Navbar;
