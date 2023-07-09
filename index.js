// import express and dotenv package installed above
const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");
const mobRoute = require("./routes/mob");
const horseRoute = require("./routes/horse");

(async () => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    // enable env varibales for .env file
    dotenv.config()
    app.listen(5005, () => {
        console.log("Server is running")
    })
    
    // a basic index route
    app.get('/', (req,res)=>{
        res.send("You're in the index page")
    })
    
    app.use("/api/mobs", mobRoute);
    app.use("/api/horses", horseRoute);

    module.exports = app;
})();