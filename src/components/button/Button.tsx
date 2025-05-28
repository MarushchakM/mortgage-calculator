import styles from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  type: 'submit' | 'button';
  classNameProp: string; 
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  type,
  classNameProp,
  onClick
}) => {
  return (
    <button 
      type={type} 
      className={styles[classNameProp]} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
