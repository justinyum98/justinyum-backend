const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET user's Media objects. */
router.get('/', (req, res) => {
  getMediaIDs();
});

const getMediaIDs = () => {
  const options = {
    method: 'get',
    url: `https://graph.facebook.com/${process.env.INSTA_ID}/media`,
    params: {
      access_token: process.env.PAGE_ACCESS_TOKEN
    }
  }
  axios(options)
    .then((res) => {
      getAllMediaObjects(res.data.data);
    })
}

const getAllMediaObjects = (mediaIDs) => {
  let allPromises = getMediaObjectPromises(mediaIDs);
  Promise.all(allPromises)
    .then((res) => {
      res.json(parseMediaData(res))
    })
}

const getMediaObject = (mediaID) => {
  const options = {
    method: 'get',
    url: `https://graph.facebook.com/${mediaID}`,
    params: {
      fields: 'id,media_url,media_type,like_count,caption,permalink',
      access_token: process.env.PAGE_ACCESS_TOKEN
    }
  }
  return axios(options);
}

const getMediaObjectPromises = (mediaIDs) => {
  let allPromises = [];
  mediaIDs.forEach((element) => {
    allPromises.push(getMediaObject(element.id));
  });
  return allPromises;
}

const parseMediaData = (mediaObjects) => {
  var mediaData = []
  mediaObjects.forEach((mediaObject) => {
    mediaData.push(mediaObject.data);
  })
  return mediaData;
}

module.exports = router;
