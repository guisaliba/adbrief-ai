const { LOCKED_COPYTEXT_ITEMS } = require('./prompt-matrix.js');

/**
 * Single source of truth for locked copy-angle labels shared with the client.
 */
module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  return res.status(200).json({
    locked_copytext_labels_pt: LOCKED_COPYTEXT_ITEMS.map(function(item) {
      return item.labelPt;
    }),
    locked_copytext_items: LOCKED_COPYTEXT_ITEMS.map(function(item) {
      return { key: item.key, label_pt: item.labelPt };
    })
  });
};
