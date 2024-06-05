const Handlebars = require("handlebars");
// Register the helper
Handlebars.registerHelper("and", function (a, b, options) {
  return a && b ? options.fn(this) : options.inverse(this);
});
