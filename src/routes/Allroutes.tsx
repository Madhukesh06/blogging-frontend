import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../components/Home/HomePage";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/Navbar/Navbar";
import RequireAuth from "../hoc/AuthRequired";

const Allroutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <LandingPage />
          </>
        }
      />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default Allroutes;
