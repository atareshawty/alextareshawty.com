import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <h3>
      This section of the site is mostly going to contain recipes. You can find them <Link to="/food/recipes">here</Link>
    </h3>
  </Layout>
);
