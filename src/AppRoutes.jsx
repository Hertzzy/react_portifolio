import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Navbar from "./components/navbar";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <HomePage />
                        </>
                    }
                />
                <Route
                    exact
                    path="/about"
                    element={
                        <>
                            <Navbar />
                            <About />
                        </>}
                />
                {/* <Route
                    exact
                    path=""
                    element={ }
                />
                <Route
                    exact
                    path=""
                    element={ }
                /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;