import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Fotter from "./components/Fotter";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? null : <Navbar />}

      <Toaster />

      <div
        className={`${isSellerPath ? " " : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      {!isSellerPath && <Fotter />}
    </div>
  );
};

export default App;
