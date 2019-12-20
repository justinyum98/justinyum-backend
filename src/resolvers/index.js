const { getAllProjects } = require('../data/projects');
const { getAllExperience } = require('../data/experience');
const { sgMail } = require('../sendgrid');

module.exports = {
  Query: {
    posts: (_, __, { dataSources }) => (
      dataSources.instagramAPI.getAllMediaObjects()
    ),
    projects: () => (
      getAllProjects()
    ),
    experience: () => (
      getAllExperience()
    ),
  },
  Mutation: {
    sendContactInfo: (_, { fullName, emailAddress, message }) => {
      const msg = {
        to: process.env.MY_EMAIL_ADDRESS,
        from: emailAddress,
        subject: `Incoming message from ${fullName}`,
        text: message,
      };
      return new Promise((resolve, reject) => {
        sgMail.send(msg)
          .then(() => {
            resolve({
              fullName,
              emailAddress,
              message,
            });
          })
          .catch((error) => {
            reject(`Error in sending mail: ${error}`);
          });
      });
    }
  }
}