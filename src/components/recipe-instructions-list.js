import React from 'react';
import PropTypes from 'prop-types';

import styles from './recipe-instructions-list.module.css';

const RecipeInstruction = ({ index, instruction }) => (
  <div className={styles.instruction}>
    ({index}) {instruction}
  </div>
);

RecipeInstruction.propTypes = {
  index: PropTypes.number.isRequired,
  instruction: PropTypes.string.isRequired,
};

const RecipeInstructionsList = ({ className, instructions }) => (
  <div className={className}>
    <h4 className={styles.header}>Instructions</h4>
    {[...instructions, 'Enjoy!'].map((instruction, index) => (
      <RecipeInstruction
        index={index}
        instruction={instruction}
        key={instruction}
      />
    ))}
  </div>
);

RecipeInstructionsList.propTypes = {
  className: PropTypes.string.isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RecipeInstructionsList;
