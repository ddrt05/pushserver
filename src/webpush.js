const webpush = require("web-push");

console.log (process.env.PRIVATE_VAPID_KEY);
console.log (process.env.PUBLIC_VAPID_KEY);
webpush.setVapidDetails(
  "mailto:druizt@externas.jccm.es",
 "BHz5Gre463ldKXVJ5-V3oB5c12zYNh7XA57oYVHzexTet29yg5XCweuVYKXNSKnTJtgKvVFgnG3lmrgodUbfjuA",
  "270jLc8NEF_S7IcacvRoxExSpV6s2Jce_nECy8NrsMA"
);

module.exports = webpush;
