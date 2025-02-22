import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Work Samples',
    link: 'docs/work_samples/bigfishgames',
    description: (
      <>
        All examples of my professional work that I have done.
      </>
    ),
  },
  {
    title: 'Resume',
    link: 'docs/resume',
    description: (
      <>
        My current resume for viewing or download.
      </>
    ),
  },
  {
    title: 'Recommendations',
    link: 'docs/recommendations',
    description: (
      <>
        All my recommendations I've received from my managers and colleagues.
      </>
    ),
  },
];

function Feature({title, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card">
        <a href={link}>
          {/* <span className="front-tab-span"> */}
            <div className="text--center padding-horiz--md front-tabs card_container">
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </div>
          {/* </span> */}
        </a>
      </div>
    </div>
  );
}

type AboutItem = {
  title: string;
  description: ReactNode;
}

const AboutItemList: AboutItem[] = [
  {
    title: 'About Me',
    description: (
      <>
      <div className="aboutme_div">
        <p>I'm a technical writer and software engineer with a passion for bridging the gap between developers and documentation. With experience spanning SDK documentation, automation workflows, and developer education, I specialize in making complex technical concepts clear and accessible.</p>
        <p>Over the years, I’ve worked with companies like Big Fish Games, Unity, Microsoft, Amazon, and Oculus, crafting user-friendly documentation, automating pipelines, and improving developer experiences. Whether I’m writing API guides, optimizing documentation workflows, or collaborating with engineers, my goal is always the same: to create content that empowers and informs.</p>
        <p>When I’m not refining docs or coding, you’ll probably find me experimenting with new tech, diving into game development, or planning my next TTRPG game.</p>
        <p>Let's connect and build something great together!</p>
      </div>
      </>
    ),
  }
]

function About({title, description}: AboutItem) {
  return (
    <div className="text--center padding-horiz--md">
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.container_about}>
        <div className="container">
          <div className="row">
            {AboutItemList.map((props, idx) => (
              <About key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
