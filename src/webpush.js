webpush = require("web-push");
require('dotenv').config();

console.log (process.env.PRIVATE_VAPID_KEY);
console.log (process.env.PUBLIC_VAPID_KEY);
console.log ("nueva version Puerto: " +process.env.PORT);

 webpush.setVapidDetails(
   "mailto:druizt@externas.jccm.es",
    ""+process.env.PRIVATE_VAPID_KEY+"",
    process.env.PRIVATE_VAPID_KEY
 );

module.exports = webpush;
