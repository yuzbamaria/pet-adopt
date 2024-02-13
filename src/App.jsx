import React from "react";
import { ProfileProvider } from "./components/ProfileContext";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
// import CreateSkill from "./pages/CreateSkill";


function App() {
  return (<ProfileProvider>
      <Router>
        <Header />
        {/* <CreateSkill /> */}
        <Wrapper />
        <Footer />
      </Router>
    </ProfileProvider>)
}

export default App;
