import Image, { StaticImageData } from 'next/image';
import logo from '../../../public/images/logo.svg';
import location from '../../../public/images/icon-location.svg';
import email from '../../../public/images/icon-email.svg';
import phone from '../../../public/images/icon-phone.svg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/footer.module.scss';

const { facebook, twitter, instagram } = require('../../fontawesome');

type ContactType = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

const FooterLayout = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={logo} alt="logo" aria-hidden="true" />
      </div>
      <div className={styles.row}>
        <div className={styles['contact-wrapper']}>
          <ContactDetails
            src={location}
            alt="just a location"
            className="location"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </ContactDetails>
          <div>
            <ContactDetails src={phone} alt="phone icon">
              +1-543-123-4567
            </ContactDetails>
            <ContactDetails src={email} alt="email icon">
              example@fylo.com
            </ContactDetails>
          </div>
        </div>
        <div className={styles.links}>
          <Link href="#about-us">About Us</Link>
          <Link href="#jobs">Jobs</Link>
          <Link href="#press">Press</Link>
          <Link href="#blog">Blog</Link>
        </div>
        <div className={styles.terms}>
          <Link href="#contact-us">Contact Us</Link>
          <Link href="#terms">Terms</Link>
          <Link href="#privacy">Privacy</Link>
        </div>
        <div className={styles.social}>
          <span>
            <Link href="#facebook">
              <FontAwesomeIcon icon={facebook} className={styles['s-icons']} />
            </Link>
          </span>
          <span>
            <Link href="#twitter">
              <FontAwesomeIcon icon={twitter} className={styles['s-icons']} />
            </Link>
          </span>
          <span>
            <Link href="#instagram">
              <FontAwesomeIcon icon={instagram} className={styles['s-icons']} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

const ContactDetails: React.FC<ContactType> = ({
  src,
  alt,
  children,
  className,
}) => {
  return (
    <div className={`${styles.contact} ${styles[className]}`}>
      <Image src={src} alt={alt} />
      <p>{children}</p>
    </div>
  );
};

export default FooterLayout;
