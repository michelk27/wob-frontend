import React from 'react';
import Frame8 from "./components/Frame8.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from '../src/components/Access/SignUp.jsx';
import Authentication5 from "./components/Authentication5/Authentication5.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/signUp" component={SignUp} />
                        <Route path="/Authentication5" component={Authentication5} />
                        <Route path ="/" element={<Frame8 />} />
                        <Route path="/frame8" element={<Frame8 />} />
                    </Routes>
            </BrowserRouter>
        </>
    )

}

export default App;
