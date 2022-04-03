import styles from '../styles/stayproductive.module.scss';
import stayProdImage from '../../../public/images/illustration-stay-productive.png';
import iconArrow from '../../../public/images/icon-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

const StayProductiveLayout: React.FC = () => {
  return (
    <div className={styles['stay-productive']}>
      <div className={styles.image__wrapper}>
        <Image src={stayProdImage} alt="Three people holding colored box" />
      </div>
      <div className={styles.descript__wrapper}>
        <h2 className={styles.title}>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className={styles['button-link']}>
          <Link href="#see-how-fylo-works">See how Fylo works </Link>
          <Image src={iconArrow} alt="arrow" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default StayProductiveLayout;
