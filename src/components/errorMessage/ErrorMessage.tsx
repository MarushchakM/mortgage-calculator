import styles from './ErrorMessage.module.scss';
type Props = {
  message: string | undefined;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <p className={styles.error}>
      {message && <p className={styles.errorMessage}>{message}</p>}
    </p>
  );
};

export default ErrorMessage;
