 webpush = require("web-push");
 //const base64url = require('base64-url');

console.log (process.env.PRIVATE_VAPID_KEY);
console.log (process.env.PUBLIC_VAPID_KEY);
console.log ("nueva version 2");
//const publica = base64url.encode(process.env.PUBLIC_VAPID_KEY);
//const privada = base64url.encode(process.env.PRIVATE_VAPID_KEY);
console.log ("publica " +publica);
console.log ("privada " +privada);
// webpush.setVapidDetails(
 //  "mailto:druizt@externas.jccm.es",
 //  publica,
//   privada
// );

function ByteArrayPadLeft(src, size)
 {
  var dst = new byte[size];
  var startAt = dst.Length - src.Length;
  Array.Copy(src, 0, dst, startAt, src.Length);
  return dst;
}

module.exports = webpush;
