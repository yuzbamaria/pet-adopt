import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../../pages/Home";
import Testing from "../../pages/Testing";

function Wrapper(props) {
    return(<main>
        <Routes>
            <Route path="/" end element={<Home />} />
            <Route path="/testing" element={<Testing />} />
        </Routes>
    </main>)
}

export default Wrapper