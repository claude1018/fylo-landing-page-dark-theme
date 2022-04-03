import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/nav.module.scss';
import logo from '../../../public/images/logo.svg';

const NavLayout: React.FC<React.ReactNode> = () => {
  return (
    <div className={styles.nav}>
      <div className={styles['logo-container']}>
        <Link href="#home">
          <Image className={styles.logo} src={logo} objectFit="fill" />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles['menu-item']}>
          <Link href="#features">Features</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link href="#teams">Team</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link href="#sign-in">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLayout;
