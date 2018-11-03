module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "babel-eslint",
  "rules": {
    "class-methods-use-this": 0,
    "import/no-unresolved": 0,
    "semi": 0,
    "linebreak-style": 0
  },
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                          // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "16.6", // React version, default to the latest React stable release
    },
    "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                    // propTypes object, e.g. `forbidExtraProps`.
                                                    // If this isn't set, any propTypes wrapped in
                                                    // a function will be skipped.
  }
}
