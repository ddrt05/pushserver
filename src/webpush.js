 webpush = require("web-push");
 const base64url = require('base64url');

console.log (process.env.PRIVATE_VAPID_KEY);
console.log (process.env.PUBLIC_VAPID_KEY);
console.log ("nueva version 2");
console.log ("publica " +publica);
console.log ("privada " +privada);
 webpush.setVapidDetails(
   "mailto:druizt@externas.jccm.es",
    process.env.PRIVATE_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
 );

function ByteArrayPadLeft(src, size)
 {
  var dst = new byte[size];
  var startAt = dst.Length - src.Length;
  Array.Copy(src, 0, dst, startAt, src.Length);
  return dst;
}

module.exports = webpush;
