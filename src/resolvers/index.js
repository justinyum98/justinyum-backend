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
    sendContactInfo: (_, { contactInfo }) => {
      const { fullName, emailAddress, message } = contactInfo;
      const msg = {
        to: process.env.MY_EMAIL_ADDRESS,
        from: emailAddress,
        subject: `Incoming message from ${fullName}`,
        text: message,
      };
      return new Promise((resolve, reject) => {
        sgMail.send(msg)
          .then(() => {
            resolve(contactInfo);
          })
          .catch((error) => {
            reject(`Error in sending mail: ${error}`);
          });
      });
    }
  }
}