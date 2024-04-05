 webpush = require("web-push");

console.log (process.env.PRIVATE_VAPID_KEY);
console.log (process.env.PUBLIC_VAPID_KEY);
console.log ("nueva version 2");
const publica = UrlBase64.Encode(process.env.PUBLIC_VAPID_KEY);
const privada = UrlBase64.Encode(ByteArrayPadLeft(process.env.PRIVATE_VAPID_KEY, 32));
console.log ("publica " +publica);
console.log ("privada " +privada);
 webpush.setVapidDetails(
   "mailto:druizt@externas.jccm.es",
   publica,
   privada
 );

function ByteArrayPadLeft(src, size)
 {
  var dst = new byte[size];
  var startAt = dst.Length - src.Length;
  Array.Copy(src, 0, dst, startAt, src.Length);
  return dst;
}

module.exports = webpush;
