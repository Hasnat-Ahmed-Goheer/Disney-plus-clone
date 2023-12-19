import React from "react";
import homeLogo from "../../assets/images/home-icon.svg";
import searchLogo from "../../assets/images/search-icon.svg";
import watchListLogo from "../../assets/images/watchlist-icon.svg";
import originalLogo from "../../assets/images/original-icon.svg";
import movieLogo from "../../assets/images/movie-icon.svg";
import seriesLogo from "../../assets/images/series-icon.svg";
const HeaderCenter = () => {
  const aClassName =
    "flex items-center cursor-pointer hover:text-gray-400 py-4 pr-4 font-bold transition duration-200 ease-in-out ";
  const imgClassName = "h-[30px]";
  const spanClassName = " text-sm tracking-widest";
  return (
    <div className="ml-7 flex flex-1 items-center ">
      <a href="/main" className={aClassName}>
        <img src={homeLogo} alt="" className={imgClassName} />{" "}
        <span className={spanClassName}>HOME</span>
      </a>
      <a href="*" className={aClassName}>
        <img src={searchLogo} alt="" className={imgClassName} />{" "}
        <span className={spanClassName}>SEARCH</span>
      </a>
      <a href="*" className={aClassName}>
        <img src={watchListLogo} alt="" className={imgClassName} />{" "}
        <span className={spanClassName}>WATCH-LIST</span>
      </a>
      <a href="*" className={aClassName}>
        <img src={originalLogo} alt="" className={imgClassName} />{" "}
        <span className={spanClassName}>ORIGINALS</span>
      </a>
      <a href="*" className={aClassName}>
        <img src={movieLogo} alt="" className={imgClassName} />{" "}
        <span className={spanClassName}>MOVIES</span>
      </a>
      <a href="*" className={aClassName}>
        <img src={seriesLogo} alt="" className={imgClassName} />{" "}
        <span className={spanClassName}>SERIES</span>
      </a>
    </div>
  );
};

export default HeaderCenter;
