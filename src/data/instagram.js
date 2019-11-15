const { RESTDataSource } = require('apollo-datasource-rest');

class InstagramAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseUrl = 'https://graph.facebook.com';
  }

  /* GET Array of MediaIDs. */
  async getMediaIDs() {
    let response;
    try {
      response = await this.get(`/${process.env.INSTA_ID}/media`, {
        access_token: `${process.env.PAGE_ACCESS_TOKEN}`,
      });
    } catch(err) {
      throw new Error(err);
    }
    return response.data.data;
  }

  /* GET Media object by ID. */
  async getMediaByID({ mediaID }) {
    let response;
    try {
      response = await this.get(`${mediaID}`, {
        fields: 'id,media_type,media_url,owner,timestamp',
        access_token: `${process.env.PAGE_ACCESS_TOKEN}`,
      });
    } catch(err) {
      throw new Error(err);
    }
    return this.mediaReducer({ media: response.data });
  }

  async getAllMediaObjects() {
    const mediaIDs = this.getMediaIDs();
    let mediaObjects = [];
    mediaIDs.forEach((mediaID) => {
      const media = getMediaByID({ mediaID });
      mediaObjects.push(media);
    });
    return mediaObjects;
  }

  async mediaReducer({ media }) {
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
