const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;
const routes = require('./routes.js');
app.use('/words', routes);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
}); 

