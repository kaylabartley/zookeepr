const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));


app.use('/api', apiRoutes);

app.use('/', htmlRoutes);



/*app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});*/

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});