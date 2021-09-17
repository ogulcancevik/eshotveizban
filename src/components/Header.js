import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-screen p-1 flex justify-around bg-tablegray font-semibold text-xl">
      <Link to="/" className="text-buttonred hover:text-buttonred no-underline">
        ESHOT
      </Link>
      <Link
        to="/İzban"
        className="text-izbanblue hover:text-izbanblue no-underline"
      >
        İZBAN
      </Link>
    </div>
  );
};

export default Header;
