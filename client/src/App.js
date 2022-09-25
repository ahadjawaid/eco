import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Fund from "./pages/Fund";
import Project from "./pages/Project";
import ProfilePage from "./pages/ProfilePage";
// Components
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
// Redux action
import { fetchUser } from './store/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    console.log(this.props.auth);
  }

  mainApp () {
    return (
      <div className="app grid-wrapper">
        <div className="topbar" sx={{
          backgroundColor: "blue",
        }} />
        <Sidebar />
        <Profile />
        <div className="page page-box">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/fund" element={<Fund />} />
            <Route path="/project" element={<Project />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    );
  }

  landingApp () {
    return(
      <div>
        <Home />
      </div>
    );
  }

  render () {
    return (
      <BrowserRouter>
        { this.props.auth ? this.mainApp() : this.landingApp() }
      </BrowserRouter>

    );
  }
};

const mapStateToProps = ({ auth }) => {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);
