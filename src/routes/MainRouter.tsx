import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

const MainRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/main" element={<Main />} />
        <Route
          path="*"
          element={
            <h2 className="pt-20 text-center text-4xl text-[#f9f9f9]">
              404 | Page Not Found
            </h2>
          }
        />
      </Routes>
    </>
  );
};

export default MainRouter;
