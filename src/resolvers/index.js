module.exports = {
  Query: {
    posts: (_, __, { dataSources }) => {
      const mediaObjects = await dataSources.instagramAPI.getAllMediaObjects();
      return mediaObjects;
    }
  }
}