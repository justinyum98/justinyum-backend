const { RESTDataSource } = require('apollo-datasource-rest');

class InstagramAPI extends RESTDataSource {
  constructor() {
    super();
  }
  
  /* GET User's profile picture */
  async getUser() {
    let response;
    try {
      response = await this.get(`https://graph.facebook.com/${process.env.INSTA_ID}`, {
        fields: 'profile_picture_url',
        access_token: `${process.env.PAGE_ACCESS_TOKEN}`,
      })
    } catch(err) {
      throw new Error(err);
    }
    return response;
  }

  /* GET Array of MediaIDs. */
  async getMediaIDs() {
    let response;
    try {
      response = await this.get(`https://graph.facebook.com/${process.env.INSTA_ID}/media`, {
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
        fields: 'id,username,media_type,media_url,like_count,caption,comments_count,permalink,timestamp',
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

  async userReducer(user) {
    return {
      id: user.id,
      profilePictureUrl: user.profile_picture_url,
    };
  }

  async mediaReducer(media) {
    return {
      id: media.id,
      username: media.username,
      mediaType: media.media_type,
      mediaUrl: media.media_url,
      likeCount: media.like_count,
      caption: media.caption,
      commentsCount: media.comments_count,
      permalink: media.permalink,
      timestamp: media.timestamp,
    };
  }
}

module.exports = InstagramAPI;
