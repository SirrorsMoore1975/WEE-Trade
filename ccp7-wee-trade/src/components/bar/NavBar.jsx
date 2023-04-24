import React, {useState} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Button from './../button/Button';


import {UserAuth} from '../context/AuthContext';


import './NavBar.css'



export default function NavBar(){
    
    const navigate = useNavigate();
    const { user, logOut } = UserAuth();
    // LogOut
    const handleLogOut = async () => {
        try{
            await logOut();
            navigate('/signin')

        } catch (err) {
            console.error(err);

        }
    }
    

    // const [isGuest, setIsGuest] = useState(true);
    // const [ hasUsername, checkHasUsername] = useState(false)
    // const handleCheckUsername = () => {
    //     if(username){
    //         if(isLoggedIn){
    //             setIsGuest(false);
    //             hasUsername(true);
    //         }
    //     } else {
    //         setIsGuest(true);
    //         hasUsername(false);
    //     }
    // }

    

    return (
        <div>
            <div className="taskbar-top"></div>
                <div className="Navbar">
        <h1 className="greeting">Welcome To Wee-Trade</h1>
        <div className="loginStatus">
        

        <dir className="LoggedIn">You Are logged in as {user.email}</dir>
        <div>Welcome {user.email}</div>
        
        <Button setValue="Log Out" onClick={handleLogOut}></Button>
        {/* <div className="notLogin"><Link to="/signin">Sign In</Link>{ " | " }<Link to="/signup">Sign Up</Link>
        <div>Welcome Okakusama</div>
        </div> */}

        
        
        
        
        </div>
        </div>
        </div>
    )
}