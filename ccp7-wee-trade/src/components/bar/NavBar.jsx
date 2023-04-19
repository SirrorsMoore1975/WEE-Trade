import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import './NavBar.css'


export default function NavBar({ isLoggedIn, username }){
    const [isGuest, setIsGuest] = useState(true);

    const [ hasUsername, checkHasUsername] = useState(false)
    const handleCheckUsername = () => {
        if(username){
            if(isLoggedIn){
                setIsGuest(false);
                hasUsername(true);
            }
        } else {
            setIsGuest(true);
            hasUsername(false);
        }
    }

    return (
        <>
        <div className="Navbar">
        <h1>Welcome To Wee-Trade</h1>
        {isLoggedIn ? <><dir>You Are logged in as {username}</dir> </>: <><Link to="/signin">Sign In</Link>{ " " }<Link to="/signup">Sign Up</Link></>}
        
        
        {isLoggedIn ? <div>Welcome {username}</div> : <div>Welcome Okakusama</div>}
        
        </div>
        
        </>
    )
}