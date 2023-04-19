const express = require('express');
const db = require('../db/index');

function setupServer() {
    const app = express();

    app.use(express.json());

    app.get('/hello', (req, res) => {
        res.send('🌏world');
    });

    /**
     * /api/user
     */
    // app.get('/api/user/:id', (req, res) => {
        
    // })
    

    // app.get('/api/user/:data', (req,res) => {
    //     // return the user details of that given id / Email / Username
    //     const query = req.params.data;
    //     // Payload to test the connection
    //     console.log("🤮",query);
    //     const testdata = {username: "ABC", email:"DEF", address:"YJK"}
    //     if(query){
    //         res.status(200).send(testdata);
    //     }
    //     res.status(200).send("hello from api user");
    // })
    // app.get('/api/user/:username', (req,res) => {
        
        
        
    //     //const query = req.query.limit
    //     if(query){

    //     } else {
    //         res.send(200).send
    //     }
    // });

    app.post('/api/user', (req, res)=> {
        // Add new user - check credential
        const {username, email, address } = req.body;
        let length;
        // {username, email, address}
        for(let i =0;i<length; i++){}
        // if username / email already existed, user should be informed to amend it/them. res.send(400) forbidden
        // else if username and/or email are unique, write to table user
        knex('user').insert({username, email, address})
        
    });

    

    

    // app.post('/api/user/:idEmailUsername/:amendmentType/:amendTo', (req,res) => {
    //     // Edit user data depends on amendment Type
    // });

    app.delete('/api/user/:idEmailUsername', (req, res)=> {
        // Delete given user details
    })


    /**
     * POST Related 
     */

    app.get('/api/posts/', async (req, res) => {
        // print full post, should set limit n=100
        const postfeeds = await db('post')
        .select('*')
        .timeout(1500);
    })

    app.get('/api/posts/:id', (req, res) => {
        // print post id
    })

    app.post('/api/posts/:userid/addpost', (req,res)=> {
        // add new post, grab seller user id, img_url, describition, categories, condition, cost, date and time of issue 
        // check data consistency
    });



    // app.post('/api/post/:id/', (req,res)=> {
    //     // pending
    // });

    // app.delete('/api/post/:id', (req,res) => {
    //     // remove post by id
    // })

    /**
     * Order
     */
    app.get('/api/order', (req, res) => {
        // print all orders, limit to 50 by default, can specify limit
        // Check credential / syntax
    })

    app.get('/api/order/:id', (req, res) => {
        // print order of specific id
    })

    // app.get('/api/order/:seller_id', (req, res) => {
    //     // return orders from the seller_id, default last 20, can specify limit
    // })
    app.post('/api/order', (req, res) => {
        // add orders - grab post ID, seller ID, buyer ID, 
    })
    app.post('/api/order/:id/status/:status', (req, res) => {
        // Change order status
    })

    return app;
};

module.exports = setupServer;