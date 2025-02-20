import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Work Samples',
    description: (
      <>
        All examples of my professional work that I have done.
      </>
    ),
  },
  {
    title: 'Resume',
    description: (
      <>
        My current resume for viewing or download.
      </>
    ),
  },
  {
    title: 'Recommendations',
    description: (
      <>
        All my recommedations I've received from my managers and colleagues.
      </>
    ),
  },
];

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

type AboutItem = {
  title: string;
  description: ReactNode;
}

const AboutItemList: AboutItem[] = [
  {
    title: 'About Me',
    description: (
      <>
      <p>I'm a technical writer and software engineer with a passion for bridging the gap between developers and documentation. With experience spanning SDK documentation, automation workflows, and developer education, I specialize in making complex technical concepts clear and accessible.</p>
      <p>Over the years, I’ve worked with companies like Big Fish Games, Unity, Microsoft, Amazon, and Oculus, crafting user-friendly documentation, automating pipelines, and improving developer experiences. Whether I’m writing API guides, optimizing documentation workflows, or collaborating with engineers, my goal is always the same: to create content that empowers and informs.</p>
      <p>When I’m not refining docs or coding, you’ll probably find me experimenting with new tech, diving into game development, or planning my next TTRPG game.</p>
      <p>Let's connect and build something great together!</p>
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

// type FeatureItem = {
//   title: string;
//   link: string;
//   //color: string;
//   description: ReactNode;
// };

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Professional Work Samples',
//     link: '/docs/work_samples',
//     //color: 'var(--ifm-color-primary-darker)',
//     description: (
//       <>
//         All my available work samples can be found here!
//       </>
//     ),
//   },
//   {
//     title: 'Resume',
//     link: '/docs/resume',
//     //color: 'var(--ifm-color-primary-lighter)',
//     description: (
//       <>
//         View and download my resume here!
//       </>
//     ),
//   },
//   {
//     title: 'Recommendations',
//     link: '/docs/recommendations',
//     //color: 'var(--ifm-color-primary-darker)',
//     description: (
//       <>
//         All my professional recommendations I have received for my work!
//       </>
//     ),
//   },
// ];

// function Feature({title, link, description}: FeatureItem) {
//   return (
//     <div className={clsx('col-home col--4')}>
//       <a href={link}>
//         <div className="text--center padding-horiz--md">
//           <Heading as="h3">{title}</Heading>
//           <p>{description}</p>
//         </div>
//       </a>
//     </div>
//   );
// }

type QuickLinkItem = {
  title: string;
  link: string;
  subtitle: string;
  description: JSX.Element;
  image: string;
};

const QuickLinkList: QuickLinkItem[] = [
  // {
  //   title: 'Professional Work Samples',
  //   link: 'docs/developer/onboarding',
  //   subtitle: '',
  //   description: (
  //     <>
  //      View all my available work samples that aren't locked behind NDAs!
  //     </>
  //   ),
  //   image: 'img/bfg-onboarding.png',
  // },
//   {
//     title: 'Resume',
//     link: '/docs/developer/publishing',
//     subtitle: 'Add your game to our build & release pipelines!',
//     description: (
//       <>
//         I had the pleasure of hiring Caleb as a contract Technical Writer at Unity during the early days of Unity Learn. At the time, my team was focused on making Learn a premier learning platform, which meant we needed to rapidly expand our tutorial library. Caleb played a crucial role in helping us achieve that goal.

// Their unique combination of skills—as a technical writer, Unity developer, and programmer—made them an invaluable asset. They were able to create high-quality learning content across a wide range of topics, helping us build a strong foundation for Learn’s successful launch. Beyond their expertise, Caleb is easygoing, adaptable, and always focused on delivering great content. They iterate quickly as needs evolve, making them a fantastic collaborator in a fast-moving environment.

// I highly recommend Caleb to anyone looking for a skilled and versatile technical writer who understands both the technical and educational sides of content creation. They would be a tremendous addition to any team!
//       </>
//     ),
//     image: 'img/bfg-config.png',    
//   },
//   {
//     title: 'Tools & Services',
//     link: '/docs/developer/tools-services',
//     subtitle: 'Learn about the tools & services we use at Big Fish',
//     description: (
//       <>
//         To ensure the best publishing experience, Big Fish leverages top-shelf solutions for a variety of live ops, authentication, messaging, and telemetry needs and more
//       </>
//     ),
//     image: 'img/bfg-tools.png',
//   },
//   {
//     title: 'Game Features',
//     link: '/docs/developer/game-features',
//     subtitle: 'Integrate features into your game',
//     description: (
//       <>
//         Are you ready to integrate and add features to your game? Find out how to enable authentication, in-app purchasing, messaging and more! 
//       </>
//     ),
//     image: 'img/bfg-features.png',
//   },  
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
