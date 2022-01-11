import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Gather from "../components/gather/Gather";
import Save from "../components/save/Save";
import Compete from "../components/compete/Compete";
import Profile from "../components/profile/Profile";
import Settings from "../components/settings/Settings";
import Alerts from "../components/alerts/Alerts";
import App from "../App";

function NavBar() {
  return (
    <>
      <BrowserRouter>
        <Link to="/home">홈</Link>
        <Link to="/gather">모으기</Link>
        <Link to="/save">아끼기</Link>
        <Link to="/compete">챌린지</Link>
        <Link to="/profile">프로필</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/gather" element={<Gather />} />
          <Route path="/save" element={<Save />} />
          <Route path="/compete" element={<Compete />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavBar;
