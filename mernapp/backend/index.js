const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const port = 5000;
const mongoDB = require("./db");
mongoDB();

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000"):
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from React app
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"], // Specify allowed headers
  })
);

app.use(express.json());
// app.use('/api', require("./Routes/CreateUser"));
app.get("/", (req, res) => {
  res.status(200).send("Hello ");
});
// app.use()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
