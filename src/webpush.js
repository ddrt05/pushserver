const webpush = require("web-push");

console.log (process.env.PRIVATE_VAPID_KEY);
console.log (process.env.PUBLIC_VAPID_KEY);
const publica = Buffer.from(process.env.PUBLIC_VAPID_KEY).toString('base64url');
const privada = Buffer.from(process.env.PRIVATE_VAPID_KEY).toString('base64url');
 webpush.setVapidDetails(
   "mailto:druizt@externas.jccm.es",
   publica,
   privada
 );

module.exports = webpush;
