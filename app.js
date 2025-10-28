const express = require('express')
const app = express();
// added to define routers
const router = express.Router();

router.get('/home', (req, res) => {
    res.send("Hello, This is the .: HOME :. router");
});

router.get('/data', (req, res) => {
    res.send("Hello, This is the .: DATA :. router");
});

router.get('/', (req, res) => {
    res.send("Hello, This is the .: INDEX :. router");
});

app.use('/', router);

// fst step - before creation routers
// app.get('/', (req, res) => {
//     res.send("Hello");
// });

app.listen( process.env.PORT || 3000, () => {
    console.log('Web server is listening at port: ' + (process.env.PORT || 3000) );
});
