import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

type QuickLinkItem = {
  title: string;
  link: string;
  subtitle: string;
  description: JSX.Element;
  image: string;
};

const FeatureList: FeatureItem[] = [
  // {
  //   title: 'Easy to Use',
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

const QuickLinkList: QuickLinkItem[] = [
  // {
  //   title: 'Onboarding',
  //   link: 'docs/developer/onboarding',
  //   subtitle: 'Get started developing games with Big Fish!',
  //   description: (
  //     <>
  //       Recommedation 1
  //     </>
  //   ),
  //   image: 'img/bfg-onboarding.png',
  // },
  // {
  //   title: 'Build & Release',
  //   link: '/docs/developer/publishing',
  //   subtitle: 'Add your game to our build & release pipelines!',
  //   description: (
  //     <>
  //       Recommedation 2
  //     </>
  //   ),
  //   image: 'img/bfg-config.png',    
  // },
  // {
  //   title: 'Tools & Services',
  //   link: '/docs/developer/tools-services',
  //   subtitle: 'Learn about the tools & services we use at Big Fish',
  //   description: (
  //     <>
  //       To ensure the best publishing experience, Big Fish leverages top-shelf solutions for a variety of live ops, authentication, messaging, and telemetry needs and more
  //     </>
  //   ),
  //   image: 'img/bfg-tools.png',
  // },
  // {
  //   title: 'Game Features',
  //   link: '/docs/developer/game-features',
  //   subtitle: 'Integrate features into your game',
  //   description: (
  //     <>
  //       Are you ready to integrate and add features to your game? Find out how to enable authentication, in-app purchasing, messaging and more! 
  //     </>
  //   ),
  //   image: 'img/bfg-features.png',
  // },  
];

function QuickLink({title, link, subtitle, description, image}: QuickLinkItem) {
  return (
    <a href={link}>
      <div className={styles.quicklink}>
        <div className={styles.quicklinkImg} style={{backgroundImage: "url(" + image + ")"}}></div>
        <div className={styles.quicklinkText}>
          <Heading as="h2">{title}</Heading>
          <Heading as="h3">{subtitle}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
}

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
