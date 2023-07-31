import React from 'react';
import Frame8 from "./components/Frame8.jsx";
import {BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom';
import SignUp from '../src/components/Access/SignUp.jsx';
import Authentication5 from "./components/Authentication5/Authentication5.jsx";

const App = () => {
    return (
        <>
        <BrowserRouter>
            {/*<div>*/}
            {/*    <nav>*/}
            {/*        <ul>*/}
            {/*            /!*<li>*!/*/}
            {/*            /!*/!*    <Link to="/signUp">Sign Up</Link>*!/*!/*/}
            {/*            /!*/!*</li>*!/*!/*/}
            {/*            /!*/!*<li>*!/*!/*/}
            {/*            /!*/!*    <Link to="/Authentication5">Sign In</Link>*!/*!/*/}
            {/*            /!*/!*</li>*!/*!/*/}
            {/*        </ul>*/}
            {/*    </nav>*/}

                {/*<Route path="/signUp" component={SignUp} />*/}
                {/*<Route path="/Authentication5" component={Authentication5} />*/}
                <Route path ="/" element={<Frame8 />} />
                <Route path="/frame8" element={<Frame8 />} />
    //     //     </div>
    //     // </Router>
    // );
};

export default App;
