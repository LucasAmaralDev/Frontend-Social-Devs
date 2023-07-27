import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Home } from "./pages/Home/Home";
import Myprofile from "./pages/MyProfile/Myprofile";

export function RouteProtected({ children }) {

    const token = localStorage.getItem('token');

    if (token) {
        return children;
    } else {
        return window.location.href = '/login';
    }

}

export function Navigations() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={
                    <RouteProtected>
                        <Home />
                    </RouteProtected>
                } />

                <Route path="/myProfile" element={
                    <RouteProtected>
                        <Myprofile />
                    </RouteProtected>
                } />


                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>

        </BrowserRouter>
    )
}