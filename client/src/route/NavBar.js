import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function NavBar() {
  return (
    <>
      <BrowserRouter>
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
      ;
    </>
  );
}

export default NavBar;
