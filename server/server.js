const express = require('express');

function setupServer() {
    const app = express();

    app.use(express.json());

    app.get('/hello', (req, res) => {
        res.send('🌏world');
    });

    /**
     * /api/user
     */


    app.get('/api/user', (res,req) => {
        // should return all user database
    });

    app.get('/api/user/:idEmailUsername', (req,res) => {
        // return the user details of that given id / Email / Username
    })

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

    app.post('/api/user/:idEmailUsername/:amendmentType/:amendTo', (req,res) => {
        // Edit user data depends on amendment Type
    });

    app.delete('/api/user/:idEmailUsername', (req, res)=> {
        // Delete given user details
    })


    /**
     * POST Related 
     */

    app.get('/api/post/', (req, res) => {
        // print full post, should set limit n=100
    })

    app.get('/api/post/:id', (req, res) => {
        // print post id
    })

    app.post('/api/post/', (req,res)=> {
        // add new post, grab seller user id, img_url, describition, categories, condition, cost, date and time of issue 
        // check data consistency
    });

    app.post('/api/post/:id/', (req,res)=> {
        // pending
    });

    app.delete('/api/post/:id', (req,res) => {
        // remove post by id
    })

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