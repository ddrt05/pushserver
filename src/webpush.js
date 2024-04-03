const webpush = require("web-push");

console.log (process.env.PRIVATE_VAPID_KEY);
console.log (process.env.PUBLIC_VAPID_KEY);
webpush.setVapidDetails(
  "mailto:druizt@externas.jccm.es",
   Buffer.from(process.env.PUBLIC_VAPID_KEY, 'base64url'),
  Buffer.from(process.env.PRIVATE_VAPID_KEY, 'base64url')
);

module.exports = webpush;
