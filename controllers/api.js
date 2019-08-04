const { promisify } = require('util');
const ig = require('instagram-node').instagram();

/**
 * GET /api/instagram
 * Instagram API example.
 */
exports.getInstagram = async (req, res, next) => {
  const token = req.user.tokens.find(token => token.kind === 'instagram');
  ig.use({ client_id: process.env.INSTAGRAM_ID, client_secret: process.env.INSTAGRAM_SECRET });
  ig.use({ access_token: token.accessToken });
  try {
    const userSelfMediaRecentAsync = promisify(ig.user_self_media_recent);
    const myRecentMedia = await userSelfMediaRecentAsync();
    console.log(myRecentMedia);
    res.render('api/instagram', {
      title: 'Instagram API',
      myRecentMedia
    });
  } catch (error) {
    next(error);
  }
};
