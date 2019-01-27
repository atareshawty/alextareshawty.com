import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import IngredientsList from '../components/ingredients-list';
import Layout from '../components/layout';
import RecipeInstructionsList from '../components/recipe-instructions-list';
import RecipeTimingInformation from '../components/recipe-timing-information';
import styles from './recipe.module.css';

const renderCreditLink = credit => {
  const { name, link } = credit;

  if (link !== '') {
    return (
      <a href={link} target="_blank" rel="noreferrer noopener">{name}</a>
    );
  }

  return name;
};

const Recipe = (props) => {
  const { data: { recipesJson } } = props;
  const { metadata } = recipesJson;
  const data = JSON.parse(recipesJson.fields.data);

  return (
    <Layout title={metadata.title} isBlogPost>
      <div className={styles.recipe}>
        <div className={styles.leftColumn}>
          <h1 className={styles.recipeTitle}>{metadata.title}</h1>
          <h6 className={styles.recipeCredit}>Courtesy of: {renderCreditLink(metadata.credits)}</h6>
          <RecipeTimingInformation timingInformation={data.timingInformation} />
          <IngredientsList className={styles.ingredientsList} ingredients={data.ingredients} />
        </div>
        <div className={styles.rightColumn}>
          <Img className={styles.image} fluid={props.data.headerImage.childImageSharp.fluid} />
          <RecipeInstructionsList className={styles.instructionsList} instructions={data.instructions} />
        </div>
      </div>
    </Layout>
  );
};

Recipe.propTypes = {
  data: PropTypes.shape({
    recipesJson: PropTypes.shape({
      metadata: PropTypes.shape({
        credits: PropTypes.shape({
          link: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
      fields: PropTypes.shape({
        data: PropTypes.string.isRequired,
      }),
    }),
    headerImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          base64: PropTypes.string,
          tracedSVG: PropTypes.string,
          aspectRatio: PropTypes.number,
          src: PropTypes.string,
          srcSet: PropTypes.string,
          srcWebp: PropTypes.string,
          srcSetWebp: PropTypes.string,
          sizes: PropTypes.string,
          originalImg: PropTypes.string,
          originalName: PropTypes.string,
        }),
      }),
    }),
  }),
};

export default Recipe;

export const query = graphql`
  query($slug: String!, $headerImageFileName: String!) {
    recipesJson(fields: { slug: { eq: $slug } }) {
      metadata {
        date
        title
        credits {
          name
          link
        }
      }
      fields {
        data
      }
    }
    headerImage: file(relativePath: { eq: $headerImageFileName }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 500) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`;
