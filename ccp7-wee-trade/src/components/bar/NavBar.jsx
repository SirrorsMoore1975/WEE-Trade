import React, {useState, useEffect} from 'react';

import { Link, useNavigate  } from 'react-router-dom';
import Button from './../button/Button';


import {UserAuth} from '../context/AuthContext';

import axios from 'axios';
import './NavBar.css';



export default function NavBar(){
    const [user_id, setUserId] = useState('');
    const [userList, setUserList] = useState("");

    const navigate = useNavigate();
    const { user, logOut } = UserAuth();

    useEffect(()=>{
        getUserList();
    },[userList])
    const getUserList = async () =>{
        const payload = {
            email:user.email,
            UID:user.uid
        }
        const res = await axios.post('/api/user/init', payload)

            
        // .then(response => console.log(response)).catch(err => console.error(err))
        console.log("🦓",res.data);
        setUserList(res.data);
        
        res.data.forEach((userData) => {
            if(user.email === userData.email){
                setUserId(userData.id)
            }
        })
        
    }


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
        

        <div className="LoggedIn">You Are logged in as {user.email}</div>
        <div>Your current id: {user_id}</div>
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