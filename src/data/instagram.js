const { RESTDataSource } = require('apollo-datasource-rest');

class InstagramAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://graph.facebook.com/';
  }

  /* GET Array of MediaIDs. */
  async getMediaIDs() {
    let response;
    try {
      response = await this.get(`${process.env.INSTA_ID}/media`, {
        access_token: `${process.env.PAGE_ACCESS_TOKEN}`,
      });
    } catch(err) {
      throw new Error(err);
    }
    return response.data;
  }

  /* GET Media object by ID. */
  async getMediaByID(mediaID) {
    let response;
    try {
      response = await this.get(`https://graph.facebook.com/${mediaID}`, {
        fields: 'id,media_type,media_url,like_count,caption,permalink',
        access_token: `${process.env.PAGE_ACCESS_TOKEN}`,
      });
    } catch(err) {
      throw new Error(err);
    }
    return this.mediaReducer(response);
  }

  async getAllMediaObjects() {
    const mediaIDs = await this.getMediaIDs();
    const promises = mediaIDs.map((mediaID) => this.getMediaByID(mediaID.id));
    return Promise.all(promises);
  }

  async mediaReducer(media) {
    return {
      id: media.id,
      mediaType: media.media_type,
      mediaUrl: media.media_url,
      likeCount: media.like_count,
      caption: media.caption,
      permalink: media.permalink,
    }
  }
}

module.exports = InstagramAPI;
