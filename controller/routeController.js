const {Home,About,Project,Resume,ProjectDetails} = require("../model/monodbConnection")
const mongoose =require("mongoose")
const ProjectRouter = async(req,res)=>{
    try {
       const ProjectData= await Project.find()
       res.json(ProjectData)
       console.log("project data sent");
    } catch (error) {
        console.log("project :",error);
    }
}

const HomeRouter=async(req,res)=>{
    try {
       const HomeData= await Home.find()
       res.json(HomeData)
       console.log("home data sent");
    } catch (error) {
        console.log("home :",error);
    }
}


const AboutRouter=async(req,res)=>{
    try {
       const AboutData= await About.find()
       res.json(AboutData)
       console.log("about data sent");
    } catch (error) {
        console.log("about :",error);
    }
}

const ResumeRouter=async(req,res)=>{
    try {
       const ResumeData= await Resume.find();
       res.json(ResumeData)
       console.log("resume dada sent");
    } catch (error) {
        console.log("resume :",error);
    }
}

const ProjectDetailsRouter =async(req,res)=>{
    try {
       const id = req.params.id;
       console.log(id);
       const ProjectAllDetails= await ProjectDetails.find({_id:id});
       console.log("project all data sent");
       res.send(ProjectAllDetails);
    } catch (error) {
        console.log("ProjectDetailsRouter :",error);
    }
}
module.exports={HomeRouter,AboutRouter,ProjectRouter,ResumeRouter,ProjectDetailsRouter}