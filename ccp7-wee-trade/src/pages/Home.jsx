// import SignIn from "../components/auth/SignIn"
// import SignUp from "../components/auth/SignUp"
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Post from './../components/post/Post';
import NavBar from './../components/bar/NavBar';
import SideBar from './../components/bar/SideBar';
import Button from './../components/button/Button';
import Panel from './../components/bar/Panel'
import './Home.css';
import axios from 'axios'
import { UserAuth } from './../components/context/AuthContext';


function Home(){
    const { user, logOut } = UserAuth();

    const [postfeed, setPostFeed] = useState([]);
    // const [isLogin, setIsLogin ] = useState('true');

    const navigate = useNavigate();

    const getAllPost = () => {
        const fetchAllPost = axios.get('/api/posts/')
        setPostFeed(postfeed.data)
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
    
    return (
        
        // <div className="table">
            <div className="taskbar-top">
                <Panel />
             <div className="NarBar">
                <NavBar />
                
             </div>
             <div>
            <div className='row2'>
                
                <SideBar />

                <div className='column2'>
                    <Post seller={{id:"1367", name:"Christian" }} desc="SirrorsMoore1975 recommended NVME after HDD their new annoced GPU" hasSold={true}></Post>
                    
                    </div>
            </div>
            </div>
            


</div>
       
    )
    
}
export default Home;