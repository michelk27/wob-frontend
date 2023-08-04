import React from 'react';
import LoginPage from "./components/LoginPage.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from '../src/components/Access/SignUp.jsx';
import LoginTemplate from "./components/Template/LoginTemplate.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        {/*<Route path="/signUp" component={SignUp} />*/}
                        {/*<Route path="/LoginForm" component={LoginForm} />*/}
                        <Route path ="/" element={<LoginPage />} />
                    </Routes>
            </BrowserRouter>
        </>
    )

}

export default App;
