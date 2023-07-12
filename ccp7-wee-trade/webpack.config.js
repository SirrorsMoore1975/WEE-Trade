const myCustomMiddleware = (req, res, next) => {
    console.log("myCustomerMiddleware run successfully")
    next();
  };
  
  module.exports = {
    // ... other webpack configuration options
    devServer: {
      // ... other devServer options
      setupMiddlewares: (devServer) => {
        devServer.app.use(myCustomMiddleware);
      },
    },
  };