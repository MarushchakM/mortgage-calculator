import { type UseFormRegister, type UseFormWatch } from 'react-hook-form';
import styles from './Radio.module.scss';
import type { IForm } from '../form';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  name: keyof IForm;
  value: string;
  register: UseFormRegister<IForm>;
  watch: UseFormWatch<IForm>
}

const Radio: React.FC<Props> = ({ children, name, value, register, watch }) => {
  const isChecked = watch(name) === value;

  return (
    <div className={
      classNames(styles.radio, { [styles.checkedRadio]: isChecked })
    }>
      <input 
        type="radio" 
        id={value} 
        {...register(name)} 
        value={value} 
        className={styles.hidden} 
      />
      <label htmlFor={value} className={styles.customRadioLabel}>
          <span className={styles.customRadio}></span>
          {children}
      </label>
    </div>
  );
};

export default Radio;
