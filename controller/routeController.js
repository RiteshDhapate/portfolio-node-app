const {Home,About,Project} = require("../model/monodbConnection")

const ProjectRouter = async(req,res)=>{
    try {
       const ProjectData= await Project.find()
       console.log(ProjectData);
       res.json(ProjectData)
    } catch (error) {
        console.log("project :",error);
    }
}

const HomeRouter=async(req,res)=>{
    try {
       const HomeData= await Home.find()
       console.log(HomeData);
       res.json(HomeData)
    } catch (error) {
        console.log("home :",error);
    }
}


const AboutRouter=async(req,res)=>{
    try {
       const AboutData= await About.find()
       console.log(AboutData);
       res.json(AboutData)
    } catch (error) {
        console.log("about :",error);
    }
}

module.exports={HomeRouter,AboutRouter,ProjectRouter}