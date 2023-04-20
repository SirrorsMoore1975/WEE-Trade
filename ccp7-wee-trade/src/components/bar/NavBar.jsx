import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import './NavBar.css'


export default function NavBar({ isLoggedIn, username }){
    const [isGuest, setIsGuest] = useState(true);
    const [time, setTime] =useState('');

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

    const tick = () => {
        const element =  new Date().toLocaleTimeString()
        setTime(element)

        //root.render(element);}
      
      setInterval(tick, 1000);
    }

    return (
        <div><div className="Navbar">
        <h1 className="greeting">Welcome To Wee-Trade</h1>
        <div className="loginStatus">
        <input className="myReactClock" value={element}></input>
        {isLoggedIn ? <><dir className="LoggedIn">You Are logged in as {username}</dir><div>Welcome {username}</div> </>: <div className="notLogin"><Link to="/signin">Sign In</Link>{ " | " }<Link to="/signup">Sign Up</Link><div>Welcome Okakusama</div></div>}
        
        
        
        
        </div>
        </div>
        </div>
    )
}