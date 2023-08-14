import React from 'react';
import LoginPage from "./components/LoginPage.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CustomerPage from "./components/CustomerPage.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/customers" element={<CustomerPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default App;
