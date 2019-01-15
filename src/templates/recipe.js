import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import IngredientsList from '../components/ingredients-list';
import RecipeInstructionsList from '../components/recipe-instructions-list';
import Layout from '../components/layout';
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
    <Layout>
      <div className={styles.recipe}>
        <div className={styles.recipeHeaderContainer}>
          <header className={styles.recipeHeader}>
            <h1 className={styles.recipeTitle}>{metadata.title}</h1>
            <h6 className={styles.recipeCredit}>Courtesy of: {renderCreditLink(metadata.credits)}</h6>
            <h6 className={styles.recipeCredit}>Image will go here</h6>
          </header>
          <RecipeTimingInformation timingInformation={data.timingInformation} />
        </div>
        <div className={styles.listsContainer}>
          <IngredientsList className={styles.smallList} ingredients={data.ingredients} />
          <RecipeInstructionsList className={styles.largeList} instructions={data.instructions} />
        </div>
      </div>
    </Layout>
  );
};

Recipe.propTypes = {
  data: PropTypes.shape({
    recipesJson: PropTypes.shape({
      metadata: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        credits: PropTypes.shape({
          link: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      }),
      fields: PropTypes.shape({
        data: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default Recipe;
export const query = graphql`
  query($slug: String!) {
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
  }
`;
