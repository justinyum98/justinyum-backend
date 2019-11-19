const { getAllProjects } = require('../data/projects');

module.exports = {
  Query: {
    posts: (_, __, { dataSources }) => (
      dataSources.instagramAPI.getAllMediaObjects()
    ),
    projects: () => (
      getAllProjects()
    )
  }
}