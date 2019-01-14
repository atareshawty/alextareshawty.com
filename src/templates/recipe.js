import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import RecipeTimingInformation from '../components/recipe-timing-information';
import IngredientsList from '../components/ingredients-list';
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

export default props => {
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
          <IngredientsList className={styles.list} ingredients={data.ingredients} />
          <div className={styles.list}>Instructions go here</div>
        </div>
      </div>
    </Layout>
  );
};

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
