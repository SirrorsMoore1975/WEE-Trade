// import SignIn from "../components/auth/SignIn"
// import SignUp from "../components/auth/SignUp"
import React from 'react';
import { Link } from 'react-router-dom'

function Home(){
    return (
        <div>
            <h1>Welcome To Wee-Trade</h1>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
    
}
export default Home;