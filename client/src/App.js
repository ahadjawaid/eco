import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Fund from "./pages/Fund";
import Project from "./pages/Project"
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import { Button } from "@mui/material";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      {
        auth ?
          <div className="app grid-wrapper">
            <div className="topbar" sx={{
              backgroundColor: "blue",
            }} />
            <Sidebar />
            <Profile />
            <div className="page page-box">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/project" element={<Fund />} />
                <Route path="/fund" element={<Project />} />
              </Routes>
            </div>
          </div> :
          <div>
            <Home />
            <Button onClick={() => {setAuth(true)}}>Login</Button>
          </div>
      }
    </BrowserRouter>
  );
};

export default App;
