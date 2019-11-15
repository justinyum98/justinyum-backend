const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET user's Media objects. */
router.get('/', (req, res1) => {
  getMediaIDs()
    .then((res2) => {
      getAllMediaObjects(res2.data.data)
        .then((res3) => {
          res1.json(parseMediaData(res3))
        })
        .catch((err) => {
          res1.status(500).send(`Error getting all Media objects: ${err}`);
        })
    })
    .catch((err) => {
      res1.status(500).send(`Error getting Media IDs: ${err}`);
    })
});

const getMediaIDs = () => {
  const options = {
    method: 'get',
    url: `https://graph.facebook.com/${process.env.INSTA_ID}/media`,
    params: {
      access_token: process.env.PAGE_ACCESS_TOKEN
    }
  }
  return axios(options);
}

const getAllMediaObjects = (mediaIDs) => {
  let allPromises = getMediaObjectPromises(mediaIDs);
  return Promise.all(allPromises)
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
