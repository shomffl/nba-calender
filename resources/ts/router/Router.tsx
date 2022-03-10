import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calender from "../components/pages/Calender";

const Router: React.VFC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Calender />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

if (document.getElementById("root")) {
    ReactDOM.render(<Router />, document.getElementById("root"));
}
