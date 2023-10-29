const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("db connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DBURL);
}


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

const AboutSchema = new Schema({
  title: String,
  mainMassage: String,
  selfInfo: Object,
  connectMassage: String,
  hello: String,
  f: Object
});

const Home = new mongoose.model('homes', HomeSchema);
const About = new mongoose.model('abouts', AboutSchema);
const Project = new mongoose.model('projects', ProjectSchema);
module.exports = { Home, About,Project };