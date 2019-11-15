module.exports = {
  Query: {
    posts: (_, __, { dataSources }) => (
      dataSources.instagramAPI.getAllMediaObjects()
    )
  }
}