import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Post from './../components/post/Post';
import NavBar from './../components/bar/NavBar';
import SideBar from './../components/bar/SideBar';
import Button from './../components/button/Button';

import axios from 'axios'

function TestPage () {


    return (
        <div>
            <div>
            <Post seller={{id:"1466", name:"Dowdon"}} desc="Excellent GPU" hasSold={false}></Post>
        <Button />
        <Button value="Testing"></Button>
        </div>
        </div>
    )
}

export default TestPage;