//const express = require('express');
//const bodyParser = require('body-parser');
//const cors = require('cors');
//const app = express();
//const port = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
const users = ['Alex', 'Bobby'];
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/users', (req, res) => {
    res.json(users);
});
app.post('/users', (req, res) => {
    users.push(req.body.name);
    res.json(users);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); //
