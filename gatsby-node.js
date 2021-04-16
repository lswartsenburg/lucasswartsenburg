/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        node: {
          fs: 'empty'
        }
      })

      if(stage === 'build-html'){
        actions.setWebpackConfig({
          module: {
            rules: [{
              test: /resumeGit/,
              use: loaders.null()
            }]
          }
        })
      }    
}