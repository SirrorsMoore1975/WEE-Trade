const express = require('express');
const knex = require('../db/index');

function setupServer() {
    const app = express();

    app.use(express.json());

    app.get('/hello', (req, res) => {
        res.send('🌏world');
    }); 

    const validateId = (req, res, next) => {
        
        const id = praseInt(req.params.id);
        if(id){
            next();
        } else {
            res.status(400).send("Invalid id parameter. Expecting number, received "+ typeof req.params.id);
        }
    };

    
/**
 * TwoDigit of date
    date = date > 9 ? date : "0" + date;
 */
    const date = new Date();
    let YYYY = date.getFullYear().toString();
    let MM = date.getMonth()+1;
    MM = MM > 9 ? MM.toString() : "0" + MM;
    let DD = date.getDay();
    DD = DD > 9 ? DD.toString() : "0" + DD;

    /**
     *  user route
     */
    app.get('/api/user', async (req, res) => {
        // should return whole list of user, 
        // check if limit query used
        const table = "user"
        const limit = req.params.limit || 50;
        const start = req.params.start || 1;
        const max = limit > 100 ? 100 : limit;
        // const result = [];
        const user = {
            id:"id", username:"username", email:"email", address:"address" 
        }
        
            // for(let i=start; i<max; i++){

            // }
        
        
            const payload = await knex('user').select('*').from(table).limit(max);
      
        
        console.log("😄", payload)
        res.status(200).send(payload)
    } )


    app.get('/api/user/:id', validateId, (req, res) => {
        const id = praseInt(req.params.id);
        const  result = {}
    })
    

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

    app.post('/api/user', async (req, res)=> {
        // Add new user - check credential
        
        console.log("💣",req.body);
        // const inputData = {username:username, email: email, address:address}
        // const { username, email, address } = req.body;
        //let length;
        // {username, email, address}
        // for(let i =0;i<length; i++){}
        // if username / email already existed, user should be informed to amend it/them. res.send(400) forbidden
        // else if username and/or email are unique, write to table user
        const {username, email, address, UID} = req.body
        // const username = req.body.username;
        // const email = req.body.email;
        // const address = req.body.address;
        // const UID = req.body.UID;
        // console.log("😉",typeof username);
        
        await knex('user').insert({username:username, email:email, address:address, UID:UID})
        const user = await knex('user').select(['username','email']);
        res.status(201).send(user);
        // .then(() => { knex.select().from('user').then((user) => {
        //     res.send(user)
        // })
         // const result = await knex('user').insert(inputData);
            // const result = await knex.select({username, email, address}).from('user')
            // const result = await knex.query("INSERT INTO weetrade (username")
            // await Promise.all([  
            // knex('user').insert({username: username}),
            // knex('user').insert({email:email}),
            // knex('user').insert({address:address})
    //  ])
    
        
        // res.send({message: "Payload has successfully received", isUploaded: true})
    });

    

    

    // app.post('/api/user/:idEmailUsername/:amendmentType/:amendTo', (req,res) => {
    //     // Edit user data depends on amendment Type
    // });

    app.delete('/api/user/', (req, res)=> {
        // Delete given user details
        const id = req.params.id;

    })

    /**
     * Cat - a.k.a Categories
     */

    app.get("/api/cat", async (req,res) => {
        const result = await knex('component_categories').select(['id',"categories"])
        
        res.status(200).send(result);
    })



    /**
     * Post route
     */

    app.get('/api/posts/', async (req, res) => {
        // print full post, should set limit n=100
        const postfeeds = await knex('post')
        .select('*')
        .timeout(1500);
    });

    app.post('/api/post', async (req, res) =>{
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
     * Order route
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
        app.post('/api/order', async (req, res) => {
            //const delivery_status = "TBA";
        const delivery_status = await knex("delivery_status").where("id", 1); // id = 1 status= pending
        const {post_id, seller_id, buyer_id} = req.body;
        const order = {post_id, seller_id, buyer_id, delivery_status }
            // An order should be show to both the seller AND buyer
            // The Order is mostly controlable by the seller, especially the delivery status, buyer has little or no premission of accessing seller's order
        await knex('order').insert({"post_id":post_id, "sell_id":seller_id, "buyer_id":buyer_id, "delivery":delivery_status}) 
        res.send({message: "server received payload, preparing order", data: order});
                // add orders - grab post ID, seller ID, buyer ID, 
    })

    app.post('/api/order/:id/status/:status', (req, res) => {
        // Change order status
    })




    return app;
};

module.exports = setupServer;