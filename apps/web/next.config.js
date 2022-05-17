const withTM = require("next-transpile-modules")(["ui"]);
const nextTranslate = require('next-translate')

module.exports = withTM(nextTranslate({
  reactStrictMode: true
}))
