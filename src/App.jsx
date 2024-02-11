import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
  return (<Router>
    <Header />
    <Wrapper />
    <Footer />
  </Router>)
}

export default App;
