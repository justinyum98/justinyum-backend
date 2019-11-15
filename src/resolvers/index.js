module.exports = {
  Query: {
    posts: async (_, __, { dataSources }) => {
      let mediaObjects;
      try {
        mediaObjects = await dataSources.instagramAPI.getAllMediaObjects();
      } catch(err) {
        throw new Error(err);
      }
      return mediaObjects;
    }
  }
}