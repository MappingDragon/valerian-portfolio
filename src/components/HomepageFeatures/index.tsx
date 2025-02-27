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
      <p>I am a Senior Technical Writer with a strong background in technical documentation, automation, and developer experience (DX). With expertise in SDKs, APIs, and automation pipelines, I specialize in transforming complex technical concepts into clear, user-friendly documentation that enhances developer productivity.</p>
      <p>My experience spans software engineering, content strategy, and documentation automation, where I have successfully designed workflows, built tools, and optimized processes to improve efficiency.</p>
      <p>Collaboration is at the core of my approach—I work closely with engineering, product, and UX teams to ensure documentation remains accurate, accessible, and aligned with evolving technology. My passion for streamlining developer integration, enhancing usability, and automating documentation workflows has driven impactful contributions across multiple industries, including gaming, cloud services, and AI-driven technologies.</p>
      <p>With a deep technical foundation and a focus on continuous improvement, I am dedicated to bridging the gap between complex systems and seamless user experiences.</p>
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
