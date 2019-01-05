const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
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

exports.createPages = ({ graphql, actions: { createPage } }) => (
  graphql(`
    {
      allRecipesJson {
        edges {
          node {
            metadata {
              path
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
        },
      });
    });
  })
);
