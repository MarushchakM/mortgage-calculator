import { type FieldError, type UseFormRegister } from 'react-hook-form';
import styles from './Input.module.scss';
import type { IForm } from '../form';
import ErrorMessage from '../errorMessage/ErrorMessage';

type Orient = 'left' | 'right';

type Props = {
  children: React.ReactNode;
  name: keyof IForm;
  icon: string;
  orient: Orient;
  register: UseFormRegister<IForm>;
  error?: FieldError | undefined;
}

const Input: React.FC<Props> = ({ 
  children, 
  name, 
  icon, 
  orient, 
  register,
  error
}) => {
  return (
    <div className={`${styles.input} ${error ? styles.error : ''}`}>
      <label htmlFor={name} className={styles.label}>{children}</label>
      <div className={`${styles.wrapper} ${styles[orient]}`}>
        <span className={styles.icon}>{icon}</span>
        <input type="text" id={name} {...register(name)} />
      </div>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default Input;
