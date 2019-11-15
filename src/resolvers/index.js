module.exports = {
  Query: {
    posts: async (_, __, { dataSources }) => {
      try {
        const mediaObjects = await dataSources.instagramAPI.getAllMediaObjects();
      } catch(err) {
        throw new Error(err);
      }
      return mediaObjects;
    }
  }
}