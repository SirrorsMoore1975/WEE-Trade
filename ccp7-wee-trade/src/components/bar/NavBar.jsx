import React, {useState} from 'react';
import { Link } from 'react-router-dom';


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
        <div>
            <div className="taskbar-top"></div>
                <div className="Navbar">
        <h1 className="greeting">Welcome To Wee-Trade</h1>
        <div className="loginStatus">
        
        {isLoggedIn ? <><dir className="LoggedIn">You Are logged in as {username}</dir><div>Welcome {username}</div> </>: <div className="notLogin"><Link to="/signin">Sign In</Link>{ " | " }<Link to="/signup">Sign Up</Link><div>Welcome Okakusama</div></div>}
        
        
        
        
        </div>
        </div>
        </div>
    )
}