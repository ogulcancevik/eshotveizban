import React from "react";
import EshotLogo from "../../img/eshot-logo.png";

const Navbar = () => {
  return (
    <div className="w-screen">
      <div className="flex justify-center">
        <img src={EshotLogo} alt="Eshot Logo" />
      </div>

      <div className="bg-gray h-24 flex items-center text-white text-3xl font-light">
        <p className="ml-16">ULAŞIM SAATLERİ</p>
      </div>
    </div>
  );
};

export default Navbar;
