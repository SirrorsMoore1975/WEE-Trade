// import SignIn from "../components/auth/SignIn"
// import SignUp from "../components/auth/SignUp"
import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Post from './../components/post/Post';
import NavBar from './../components/bar/NavBar';
import SideBar from './../components/bar/SideBar';
import Button from './../components/button/Button';
import Panel from './../components/bar/Panel'
import './Home.css';
import axios from 'axios'

function Home(){

    const [postfeed, setPostFeed] = useState([]);

    const getAllPost = () => {
        const fetchAllPost = axios.get('/api/posts')
        setPostFeed(postfeed.data)
    }
    // const [isLogin, setIsLogin ] = useState('false');
    
    
    return (
        
        // <div className="table">
            <div >
                <Panel />
             <div >
                <NavBar />
               
             </div>
             <div>
            <div className='row2'>
                
                <div className='sidebar-container column1'><SideBar /></div>

                <div className='column2'>
                    <Post seller={{id:"1367", name:"Christian" }} desc="SirrorsMoore1975 recommended NVME after HDD their new annoced GPU" hasSold={true}></Post>
                    <Post seller={{id:"1367", name:"Christian" }} desc="SirrorsMoore1975 recommended NVME after HDD their new annoced GPU" hasSold={true}></Post>
                    </div>
            </div>
            </div>
            <Button value="Hot Value Deal"></Button>


</div>
       
    )
    
}
export default Home;