import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";

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
                        <h1>Bem vindo</h1>
                    </RouteProtected>
                } />


                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

            </Routes>

        </BrowserRouter>
    )
}