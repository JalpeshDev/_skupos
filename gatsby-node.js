const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const productPage = path.resolve('./src/templates/fineprint.js')
    resolve(
      graphql(
        `
          {
            allContentfulLayout {
              edges {
                node {
                  id
                  slug
                  title
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const entries = result.data.allContentfulLayout.edges;
        console.log(entries)
        entries.forEach((entry) => {
          console.log("entry", entry)
          const pagePath =
            entry.node.slug === 'home' ? '' : `${entry.node.slug}`;

          createPage({
            path: `/${pagePath}`,
            component: productPage,
            context: {
              story: entry.node,
            },
          });
        });
      }),
    );
  })
}
