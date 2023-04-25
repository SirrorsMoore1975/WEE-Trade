import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Post from './../components/post/Post';
import NavBar from './../components/bar/NavBar';
import SideBar from './../components/bar/SideBar';
import Button from './../components/button/Button';
import Upload from './../components/upload/Upload';

import axios from 'axios'

function TestPage () {


    return (
        <div>
            <div>
            <Post post_id="2345" seller={{id:"1466", name:"Dowdon"}} amount="5000" desc="Excellent GPU" hasSold={false} img_url="https://i.ibb.co/x38n99S/Space-Flame-nasa-1100.jpg" alt="anything" >

            </Post>
            <div>
            <Post post_id="1881" seller={{id:"1600", name:"Stack"}} amount="6000" desc="Best Deal: Brand New AMD AMD6 CPU, new tech optimized with DDR7 RAM, Overclockable" img_url="https://i.ibb.co/nb3JFNy/CPU-AMD-RYZEN5-basic01.png" postsTitle="AMD5 CPU next Gen AMD6" ></Post>
        <Button />
        <Button value="Testing"></Button>
        <Upload></Upload>
        <input type="text"></input>
        <input type="radio"></input>
        </div>
        </div>
        </div>
    )
}

export default TestPage;