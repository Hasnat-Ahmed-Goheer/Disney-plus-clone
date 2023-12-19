import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";
import { useSelector } from "react-redux";
import { RootState } from "../../app/services/reduxStore";

const Header = () => {
  const userLoginStatus: boolean | undefined = useSelector(
    (state: RootState) => state.user.loggedIn,
  );
  return (
    <header className=" flex h-20 items-center justify-between bg-[#090b13] py-9 ">
      <HeaderLeft />
      {userLoginStatus && <HeaderCenter />}
      <HeaderRight />
    </header>
  );
};

export default Header;
