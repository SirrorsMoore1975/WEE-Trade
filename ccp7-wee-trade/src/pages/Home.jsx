// import SignIn from "../components/auth/SignIn"
// import SignUp from "../components/auth/SignUp"
import React, {useState, useEffect} from 'react';
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
    const { sendCreatedUID, user } = UserAuth();

    const [returnData, setReturnData] = useState([]);
    // const [username, setUsername] = useState()

    // First time login success, homepage should:
    // Create a new user in user table (Send payload to db)
    // 



    const [postfeed, setPostfeed] = useState([]);
    // const [isLogin, setIsLogin ] = useState('true');

    const navigate = useNavigate();

    // useEffect(async ()=>{
    //     const payload = {
    //         email: user.email,
    //         UID: user.uid,
    //         // address: address
    //         // username: username
    //     }

    //     const response = await axios.post(`/api/user`, payload);
    //     // setReturnData([...returnData, response.data])
    //     console.log("🤑",response.data);
    //         // the return payload should give username too -for  future me
        

    // }, [])

    
    // const checkInUserDetail = () => {
    //     const result = axios.post(`/api/user/checkCredential`, checkIn)
    //     createUserInDatabase(username, email, address, UID ){

    //     }
    // }

    useEffect(()=>{
        getUserId();
    })
    const getUserId = async () =>{
            const payload = {
                email:user.email,
                // UID:user.uid
            }
            const res = await axios.post('/api/user/init', payload)

            
            // .then(response => console.log(response)).catch(err => console.error(err))
            console.log("🦓",res);
        
    }

    const getAllPost = async () => {
        const fetchAllPost = await axios.get('/api/posts/')
        setPostfeed([...postfeed, fetchAllPost.data])
        console.log(postfeed)
        /* 
            postfeed = [
                {id:1, seller_id:1,img_url:img_url,description;"xxxxx", categories;"Brand New", condition, post_date, created_at, cost}
            ]
        
        */
        return (
            <Post seller={{}} />

        )

        // expect postFeed to be full of post with product waiting to be brought
        /**
         * the expected result is all the rows of the post table
         */


    }
    // LogOut - handled by Navbar 
    // const handleLogOut = async () => {
    //     try{
    //         await logOut();
    //         navigate('/signin')

    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    // const handleAccCreate = async () => {
    //     const payload = {
    //         // username, email, address, UID
    //     }
    //     // console.log("🍉",user)
    //     // const result = await 
    // }


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
                    <div className="post-area">

                    </div>
                    <Post seller={{id:"1367", name:"Christian" }} desc="SirrorsMoore1975 recommended NVME after HDD their new annoced GPU" hasSold={true}></Post>
                    
                    </div>
            </div>
            </div>
            


</div>
       
    )
    
}
export default Home;