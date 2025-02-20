import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
      <p>I'm a technical writer and software engineer with a passion for bridging the gap between developers and documentation. With experience spanning SDK documentation, automation workflows, and developer education, I specialize in making complex technical concepts clear and accessible.</p>
      <p>Over the years, I’ve worked with companies like Big Fish Games, Unity, Microsoft, Amazon, and Oculus, crafting user-friendly documentation, automating pipelines, and improving developer experiences. Whether I’m writing API guides, optimizing documentation workflows, or collaborating with engineers, my goal is always the same: to create content that empowers and informs.</p>
      <p>When I’m not refining docs or coding, you’ll probably find me experimenting with new tech, diving into game development, or planning my next TTRPG game.</p>
      <p>Let's connect and build something great together!</p>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Senior Technical Writer">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
