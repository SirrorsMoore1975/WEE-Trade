##Objective
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
