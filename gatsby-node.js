const path = require('path'); // eslint-disable-line import/no-commonjs

const { createFilePath } = require('gatsby-source-filesystem'); // eslint-disable-line import/no-commonjs

exports.onCreateNode = ({ node, getNode, actions }) => { // eslint-disable-line import/no-commonjs
  const { createNodeField } = actions;

  if (node.internal.type === 'RecipesJson') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    createNodeField({
      node,
      name: 'data',
      value: JSON.stringify({ ...node.data }),
    });
  }
};

exports.createPages = ({ graphql, actions: { createPage } }) => ( // eslint-disable-line import/no-commonjs
  graphql(`
    {
      allRecipesJson {
        edges {
          node {
            metadata {
              path
              headerImageFileName
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const { allRecipesJson } = result.data;

    allRecipesJson.edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}${node.metadata.path}`,
        component: path.resolve('./src/templates/recipe.js'),
        context: {
          slug: node.fields.slug,
          headerImageFileName: node.metadata.headerImageFileName,
        },
      });
    });
  })
);
