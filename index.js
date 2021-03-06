const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
//converting data to valid ascii format
app.use(express.urlencoded({ extended: true }));
// for using static files
app.use(express.static(path.join(__dirname,'./assets')))
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


// use express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
