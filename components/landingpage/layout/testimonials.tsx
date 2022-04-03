import Image from 'next/image';
import styles from '../styles/testimonials.module.scss';
import data from './testimonial-data';

type TbProps = {
  src: string;
  name: string;
  position: string;
  key: string;
};

type TestimonyData = {
  message: string;
  name: string;
  position: string;
  profile: string;
};

const TestimonialsLayout: React.FC = () => {
  return (
    <ul className={`${styles.container}`}>
      {data.map(
        ({ profile, name, position, message }: TestimonyData, index) => {
          return (
            <TestimonialBox
              src={profile}
              name={name}
              position={position}
              key={`${name}-${index}`}
            >
              {message}
            </TestimonialBox>
          );
        }
      )}
    </ul>
  );
};

const TestimonialBox: React.FC<TbProps> = ({
  children,
  src,
  name,
  position,
  key,
}) => {
  return (
    <li className={styles.wrapper} key={key}>
      <p>{children}</p>
      <div className={styles.profile}>
        <Image
          className={styles.image}
          src={src}
          alt="profile"
          aria-hidden="true"
          width={32}
          height={32}
        />
        <div className={styles.row}>
          <p className={styles.name}>{name}</p>
          <p className={styles.position}>{position}</p>
        </div>
      </div>
    </li>
  );
};

export default TestimonialsLayout;
