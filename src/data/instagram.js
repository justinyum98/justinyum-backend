const { RESTDataSource } = require('apollo-datasource-rest');

class InstagramAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseUrl = 'https://graph.facebook.com/';
  }

  /* GET Array of MediaIDs. */
  async getMediaIDs() {
    const url = `${process.env.INSTA_ID}/media`;
    const accessToken = `access_token=${process.env.PAGE_ACCESS_TOKEN}`;
    const params = `?${accessToken}`;
    const fullUrl = url + params;
    try {
      const response = await this.get(fullUrl);
    } catch(err) {
      throw new Error(err);
    }
    return response.data.data;
  }

  /* GET Media object by ID. */
  async getMediaByID({ mediaID }) {
    const url = `${mediaID}`;
    const fields = 'fields=id,media_type,media_url,owner,timestamp';
    const accessToken = `access_token=${process.env.PAGE_ACCESS_TOKEN}`;
    const params = `?${fields}&${accessToken}`;
    const fullUrl = url + params;
    try {
      const response = await this.get(fullUrl);
    } catch(err) {
      throw new Error(err);
    }
    return this.mediaReducer({ media: response.data });
  }

  async getAllMediaObjects() {
    const mediaIDs = this.getMediaIDs();
    return Promise.all(
      mediaIDs.map(mediaID => this.getMediaByID({ mediaID })),
    );
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
