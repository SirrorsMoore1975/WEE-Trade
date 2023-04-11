const setupServer = require('./server');
const PORT = process.env.PORT || 4000; // choose a different port
const server = setupServer(); // instigating setup server
// console.log(setupServer);

(async() => {
try {
    server.listen(PORT, () => {
        console.log(`app is listening @ http://localhost:${PORT}`);
        console.log(`This is WEE-Trade, Your components trading service server!`)
    });
} catch (error) {
    console.error(`app failed to start ${error}`);
}
})();