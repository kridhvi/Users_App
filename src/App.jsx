import React from "react";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Update from "./Components/Update";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Update />} />
            </Routes>
        </BrowserRouter>
    );
}   

export default App;