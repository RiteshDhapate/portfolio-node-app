require('dotenv').config()
const cluster = require('node:cluster');
const os = require("node:os");
const numCPUs = os.cpus().length;
const compression = require('compression')
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
    const { HomeRouter, AboutRouter, ProjectRouter,ResumeRouter,ProjectDetailsRouter } = require("./controller/routeController");
    app.use(express.json())
    app.use(cors())
    app.use(compression({ filter: shouldCompress }))
 
    function shouldCompress (req, res) {
      if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
      }
     
      // fallback to standard filter function
      return compression.filter(req, res)
    }

    app.get("/", (req,res)=>{
        res.send("user connected");
    })
    app.get("/home", HomeRouter);
    app.get("/about", AboutRouter);
    app.get("/resume", ResumeRouter);
    app.get("/project", ProjectRouter);
    app.get("/project/:id", ProjectDetailsRouter);
    
    
    const port = process.env.PORT || 3001; 
    app.listen(port, () => {
        console.log("server listening ",port);
    })
}  