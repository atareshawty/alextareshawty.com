import React from 'react';

import Layout from '../components/layout';

const About = () => (
  <Layout title="About" isBlogPost={false}>
    <h3>About Page</h3>
    <div>
      All svg icons found throughout the site were downloaded from
      fontawesome.com under the{' '}
      <a
        href="https://fontawesome.com/license"
        target="_blank"
        rel="noreferrer noopener"
      >
        Creative Commons Attribution 4.0 International license
      </a>
    </div>
  </Layout>
);

export default About;
