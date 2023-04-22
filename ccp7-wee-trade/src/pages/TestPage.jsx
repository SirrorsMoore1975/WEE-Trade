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

            <Post post_id="2345" seller={{id:"1466", name:"Dowdon"}} amount="5000" desc="Excellent GPU" hasSold={false} img_url="https://i.ibb.co/x38n99S/Space-Flame-nasa-1100.jpg" alt="anything"></Post>
        <Button />
        <Button value="Testing"></Button>
        <Upload></Upload>

        </div>
        </div>
    )
}

export default TestPage;