import React, {useState, Link} from 'react';
import axios from 'axios';
import "./SideBar.css";

import {UserAuth} from '../context/AuthContext'


export default function SideBar (){
    const [posts, getPosts] = useState([]);
    const [orders, getOrders] = useState([]); 

    return (
        <div className="sidebar-head">
            <div className='sidebar-body'>
                <h4>Your Post</h4>
        <hr />
            <div>Add Post</div>
                <div>View Opening Deal</div>
                    <div>Check Your Post</div>
                        <h4>Your Order</h4>
                        <hr />
            </div>
        </div>
    )
}