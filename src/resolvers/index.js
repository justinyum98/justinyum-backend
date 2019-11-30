const { getAllProjects } = require('../data/projects');
const { getAllExperience } = require('../data/experience');

module.exports = {
  Query: {
    user: (_, __, { dataSources }) => (
      dataSources.instagramAPI.getUser()
    ),
    posts: (_, __, { dataSources }) => (
      dataSources.instagramAPI.getAllMediaObjects()
    ),
    projects: () => (
      getAllProjects()
    ),
    experience: () => (
      getAllExperience()
    ),
  }
}