import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import styles from './index.module.css';

const Index = () => (
  <Layout>
    <h3 className={styles.header}>
      Hello! <span role="image" aria-label="waving-hand">👋</span>
    </h3>
    <div>
      <div className={styles.textBlock}>
        My name is Alex Tareshawty. I'm a software engineer by trade, but I'd like to use my little portion of the internet to share
        other things that interest me too. I'm hoping this site becomes a curation of knowledge gained of the hobbies and activities
        I'm passionate about. Feel free to reach out to me through any of the links in the footer of the site!
      </div>
      <div className={styles.headerBlock}>
        <Link className={styles.headerLink} to="/tech"><h4 className={styles.headerText}>Technology</h4></Link>
      </div>
      <div className={styles.textBlock}>
        I grew up watching my dad build his own IT consultancy which he still runs to this day. Spectating in awe of he and my older brother fix old
        servers at home sparked a curiosity that eventually turned into a career in software. I write about technology because it's defined so much
        of my life.
        {/* He even helped me setup this site (link to "how-its-hosted") */}
      </div>
      <div className={styles.headerBlock}>
        <Link className={styles.headerLink} to="/food"><h4 className={styles.headerText}>Food</h4></Link>
      </div>
      <div className={styles.textBlock}>
        My love of cooking comes directly from my mother. It is a universal truth that she makes the best lasagna known to man. My life
        has been full of amazing food because of her. I write about food because it's a powerful way to connect people.
      </div>
      <div className={styles.headerBlock}>
        <h4 className={styles.headerText}>What I'm currently doing</h4>
      </div>
      <div className={styles.textBlock}>
        Currently, most of days are spent "unbreaking" the insurance industry at{' '}
        <a href="https://joinroot.com" target="_blank" rel="noreferrer noopener">Root Insurance</a>.
        At Root, I work on the infrastructure/reliability team, striving to keep our cloud infrastructure
        fast, reliable, and cheap. Joining an ops team with a software background has proven to be an enjoyable and rewarding challenge.
      </div>
    </div>
  </Layout>
);

export default Index;
