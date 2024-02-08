import React from "react";
import './App.css'
import Home from "./pages/Home"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"

function App() {
  return (<div>
    <Header />
    <Wrapper>
      <Home />
    </Wrapper>
    <Footer />
  </div>)
}

export default App
