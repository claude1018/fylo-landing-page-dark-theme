import Image from 'next/image';
import styles from '../styles/intro.module.scss';
import heroImg from '../../../public/images/illustration-intro.png';

const IntroLayout: React.FC = () => {
  return (
    <div className={styles.intro}>
      <div className="image-intro__wrapper">
        <Image
          src={heroImg}
          alt="Image of people organizing files"
          className="max-w-[46.875rem]"
        />
      </div>
      <h1 className={styles.heading}>
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className={styles.paragraph}>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className={styles['get-started']}>Get Started</button>
    </div>
  );
};

export default IntroLayout;
