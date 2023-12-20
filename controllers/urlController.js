const shortid = require('shortid');
const Url = require('../models/Url');

const shortenUrl = async (req, res) => {
    try {
      const { originalUrl } = req.body;
  

      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized access' });
      }
  
      //........................ Generate a unique short ID using shortid..........//
      const shortId = shortid.generate();
  
      // ......Create a new URL entry......./
      const newUrl = new Url({
        originalUrl,
        shortUrl: shortId,
        user: req.user._id, 
      });
  
      // .........Save the URL to the database..........//
      await newUrl.save();
  
     
      res.status(201).json({ originalUrl, shortUrl: shortId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  const redirectToOriginalUrl = async (req, res) => {
    try {
      const { shortUrl } = req.params;
  
      //............. Find the URL entry ..........//.....
      const url = await Url.findOne({ shortUrl });
 
      if (!url) {
        return res.status(404).json({ error: 'URL not found' });
      }
  
 
      res.redirect(url.originalUrl);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = { shortenUrl, redirectToOriginalUrl };
