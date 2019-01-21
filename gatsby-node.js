const path = require('path'); // eslint-disable-line import/no-commonjs

const { createFilePath } = require('gatsby-source-filesystem'); // eslint-disable-line import/no-commonjs

const createRecipeNodeFields = (node, getNode, createNodeField) => {
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
};

const createBlogPostNodeFields = (node, getNode, createNodeField) => {
  const slug = createFilePath({ node, getNode, basePath: 'pages' });

  createNodeField({
    node,
    name: 'slug',
    value: slug,
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => { // eslint-disable-line import/no-commonjs
  const { createNodeField } = actions;

  if (node.internal.type === 'RecipesJson') createRecipeNodeFields(node, getNode, createNodeField);
  if (node.internal.type === 'MarkdownRemark') createBlogPostNodeFields(node, getNode, createNodeField);
};

const createRecipePages = (graphql, createPage) => (
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

const createBlogPostPages = (graphql, createPage) => (
  graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const { allMarkdownRemark } = result.data;

    allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  })
);

exports.createPages = ({ graphql, actions: { createPage } }) => { // eslint-disable-line import/no-commonjs
  createRecipePages(graphql, createPage);
  createBlogPostPages(graphql, createPage);
};
