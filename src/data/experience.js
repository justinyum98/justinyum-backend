const cloudinary = require('cloudinary').v2;

const getAllExperience = () => ([
  {
    companyName: 'Playstation',
    role: 'Engineering Intern',
    imageUrl: cloudinary.url('playstation_m2uowj.eps', { quality: 'auto:best', width: 300, crop: 'scale' }),
    date: 'June 2017 - Sept. 2017',
    description: "In the summer of 2017, I scored my first job ever with Playstation. As an intern of the Accounts Service team, I developed Playstation’s Accounts API service in an Agile environment, tested that service with unit tests and integration tests, and fixed defects affecting our end-users. Thanks to my team, I felt more comfortable in expressing my ideas and suggestions, something that hasn’t changed. Overall, this opportunity widened my perspective on the software industry and broke me out of my shell. (Special thanks to Durga and Patrick for believing in me!)",
    companyUrl: 'https://www.playstation.com/en-us/',
  },
  {
    companyName: 'Dexcom',
    role: 'Software Development Intern',
    imageUrl: cloudinary.url('dexcom-green-category_z1qtwa.eps', { quality: 'auto:best', width: 300, crop: 'scale' }),
    date: 'June 2018 - Sept. 2018',
    description: "Interning at Dexcom was a valuable learning experience that introduced me to the world of web development. In my time there, I learned HTML + CSS + Javascript and used Angular 6 to rebuild the user interface for my team's client token management system. Through that project, I gained a firm understanding of how HTTP requests work, how to use Promises, the importance of testing your UI components. (Thanks to Ranjit and Marco for taking time to help me.)",
    companyUrl: 'https://www.dexcom.com/',
  }
]);

module.exports = {
  getAllExperience
};
