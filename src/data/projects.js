const cloudinary = require('cloudinary').v2;

const getAllProjects = () => ([
  {
    name: 'This website!',
    role: 'Lead Developer',
    imageUrl: cloudinary.url("justinyumwebsite_tcjkrc.png"),
    date: 'May 2019 - Present',
    description: 'The very website which you are viewing right now! Built with React and Material-UI, this website is an online portfolio that details my career achievements. It also showcases my abilities as a full-stack developer (both the frontend and backend code was entirely done by me).',
    repoUrl: 'https://github.com/justinyum98/justinyum-website',
  }
]);

module.exports = {
  getAllProjects 
};
