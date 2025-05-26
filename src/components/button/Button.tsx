import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button type='submit' className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
