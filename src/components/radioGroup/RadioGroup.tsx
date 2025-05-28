import type { FieldError, UseFormRegister, UseFormWatch } from 'react-hook-form';
import type { IForm } from '../form';
import Radio from '../radio/Radio';
import styles from './RadioGroup.module.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';

type Props = {
  children: React.ReactNode;
  name: keyof IForm;
  register: UseFormRegister<IForm>;
  watch: UseFormWatch<IForm>;
  radios: { value: string, label: string }[];
  error?: FieldError | undefined;
}

const RadioGroup: React.FC<Props> = ({
  children,
  name,
  register,
  watch,
  radios,
  error
}) => {
  return (
    <div className={styles.radioGroup}>
      <h3>{children}</h3>
      {radios.map(radio => (
        <Radio
          key={radio.value}
          name={name}
          value={radio.value}
          register={register}
          watch={watch}
        >
          {radio.label}
        </Radio>
      ))}

      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default RadioGroup;
