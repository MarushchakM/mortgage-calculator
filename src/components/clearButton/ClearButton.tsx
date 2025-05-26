import type { UseFormReset } from 'react-hook-form';
import styles from './clearButton.module.scss'
import type { IForm } from '../form';

type Props = {
  reset: UseFormReset<IForm>;
  onClear: () => void;
}

export const ClearButton: React.FC<Props> = ({reset, onClear}) => {
  const handleClear = () => {
    reset();
    onClear();
  };

  return (
    <button type='button' className={styles.button} onClick={handleClear}>
      Clear All
    </button>
  );
}
