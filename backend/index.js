const express = require("express"); //req.body
const app = express();
const cors = require("cors");

// const getToken =require('./routes/routeLogin')
// const auth =require('./routes/routeAuth')

// app.use(getToken,auth)
 

//middleware
app.use(express.json());
app.use(cors());


//ROUTES

//register and login routes
app.use("/auth", require("./routes/jwtAuth.routes"));



app.listen(5000,()=>{
    console.log("server has started on port 5000");
});

