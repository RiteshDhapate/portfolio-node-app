const mongoose = require('mongoose');
const { Schema } = mongoose;
const DB_URL= "mongodb+srv://rieshdhapatepatil:DHAPATEPATIL817717@cluster0.g3ppn4h.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
async function main() {
  await mongoose.connect(DB_URL);
}
main()
.then(() => console.log("db connected"))
.catch(err => console.log("connection error :",err));



const HomeSchema = new Schema({
  heroSection: Object,
  whatIDoSection: Object,
  sliderSection: Object,
  skillSection: Object
});

const ProjectSchema = new Schema({
  mainTitle: String,
  categoryTitle: String,
  category:Object,
  project:Object
});

const ProjectDetailsSchema = new Schema({
 projectTitle:String,
massage:String,
img:Array,
TechnologyTitle:String,
Technology:Array
});

const AboutSchema = new Schema({
  title: String,
  mainMassage: String,
  selfInfo: Object,
  connectMassage: String,
  hello: String,
  f: Object
});


const ResumeSchema= new Schema({
  img:String,
  btnText:String,
  resumeLink:String
});


const Home = new mongoose.model('homes', HomeSchema);
const About = new mongoose.model('abouts', AboutSchema);
const Project = new mongoose.model('projects', ProjectSchema);
const Resume = new mongoose.model('resumes', ResumeSchema);
const ProjectDetails = new mongoose.model('pdetails', ProjectDetailsSchema);
module.exports = { Home, About,Project,Resume,ProjectDetails};