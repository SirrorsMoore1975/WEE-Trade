# Objective
 - [ ] client: create axios request for signin, signup to the server
 - [ ] server: send response from server to client

```javascript
 // short hand version is axios.post('./login', {theEmail: email, thePassword: password })
        axios({
             method: "post",
             url: "/login",
             data: {theEmail: email, thePassword: password}
         }).then((response) => {
             console.log(response);
           }, (error) => {
             console.log(error);
           });
```
shorthand will be less stressful

```javascript
// payload you sending via /user
const response = axios.post('/user', payload);
// response from server
const result = response.data
```

# Server Side
Tips:
Use postman to run the endpiont to check if your endpoints run as expected

1. Get method - should do something and return detail when the client send this
2. Post method


get method example:
1. Example
```javascript
app.get('/users', (req, res)=>{ 
  // Do a default action when this is called, to do what, you decide
  // return by res.send(thePayloadYouWantedToSend)
  // It can send query by /users?variable1=info1&variable2=info2
  const query = req.query.limit;
  const variable1 = req.query.variable1;
  const variable2 = req.query.variable2;
})
```
2. Example
```javascript
app.get('/users/:id', (req, res)=>{
  /*
  *   received from: req.params.id
  *   send payload to: res.send(datasendback)
  */
  const id = req.params.id
  res.send(dataSendBack)
});
```
post method example:
1. Example
```javascript
app.post('/users', (req, res)=> {
    // data from client is enbed into body, and it is an object
    const user = req.body;

    // data send back to client, let client know what happended
    res.send(dataSendBack)
} )
```
2. Example
```javascript
app.post('/users/:id', (req, res) =>{
  const id = req.params.id
  res.send(dataSendBack)
})
```

put method example
1. Example
```javascript
app.put('/users/:id', (req, res)=> {
  let user = req.body; // what is expected is to update user
  const id = req.params.id
  res.send(dataSendBack)
})
```

delete method example
```javascript
app.delete('/user/:id', (req, res) => {
let id = req.params.id // expecting user id to be deleted, likely in the usertable
res.send(dataSendBack)
})
```

# Knex
```javascript
db('tablename')
.select({id:"id",username:"username", email:"email", address:"address"})
.from('tablename') // ?????
.limit(max)
.timeout(1500)
.where("provider_id", provider_id_variable)
.orderBy('id','desc')
.select(*)
```