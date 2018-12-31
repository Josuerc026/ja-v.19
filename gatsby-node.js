exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
 if (stage === "build-html") {
  actions.setWebpackConfig({
   module: {
    rules: [
     {
      test: /scrollreveal/,
      use: loaders.null(),
     },
     {
      test: /react-anchor-link-smooth-scroll/,
      use: loaders.null(),
     }
    ],
   },
  })
 }
}