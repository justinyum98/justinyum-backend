module.exports = {
  Query: {
    posts: async (_, __, { dataSources }) => {
      const mediaObjects = await dataSources.instagramAPI.getAllMediaObjects();
      return mediaObjects;
    }
  }
}