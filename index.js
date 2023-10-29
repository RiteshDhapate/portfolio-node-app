require('dotenv').config()
const cluster = require('node:cluster');
const os = require("node:os");
const numCPUs = os.cpus().length;
const process = require('node:process');

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    const express = require('express');
    const app = express();
    const cors = require("cors")
    const port = 8080;
    const { HomeRouter, AboutRouter, ProjectRouter } = require("./controller/routeController");
    app.use(express.json())
    app.use(cors())

    app.get("/", (req,res)=>{
        res.send("user connected");
    })
    app.get("/home", HomeRouter)
    app.get("/about", AboutRouter)
    app.get("/project", ProjectRouter)

    
    app.listen(process.env.PORT, () => {
        console.log("server listen on :", process.env.PORT);
    })
}  