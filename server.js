// modules
const express = require('express');

// instance modules
const app = express();

// system configuration variables
const PORT = process.env.PORT || 4000;

// middleware
// does same as bodyparser, built in express
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//routes
app.get('/status',(req,res)=> {
  res.json({status:200,online:"☻"});
});

app.get('/',(req,res)=> {
  res.sendFile(`${__dirname}/views/index.html`);
});

// server listener
app.listen(PORT,()=> console.log("online"));
