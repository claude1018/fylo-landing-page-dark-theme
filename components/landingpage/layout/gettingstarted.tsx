import { useRef } from 'react';
import styles from '../styles/gettingstarted.module.scss';

const GettingStartedLayout: React.FC = () => {
  const errorShow = useRef<HTMLSpanElement>();
  const getEmail = useRef<HTMLInputElement>();
  const validateEmail = () => {
    if (getEmail.current.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      return (errorShow.current.style.display = 'none');
    errorShow.current.style.display = 'block';
    errorShow.current.textContent = 'Please enter a valid email address';
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form>
        <div className={styles.email}>
          <input
            ref={getEmail}
            type="email"
            id="email"
            name="email"
            placeholder="email@example.com"
            onChange={validateEmail}
          />
          <span ref={errorShow} className={styles.error}></span>
        </div>
        <input
          type="submit"
          id="submitBtn"
          onClick={validateEmail}
          value="Get Started For Free"
        />
      </form>
    </div>
  );
};

export default GettingStartedLayout;
