import classNames from 'classnames';
import styles from './container.module.scss';

type Status = 'primary' | 'secondary';
type Props = {
  children: React.ReactNode;
  status: Status;
}

export const Container: React.FC<Props> = ({ children, status }) => {
  return (
    <section className={
      classNames(styles.container, styles[status])
    }>
      {children}
    </section>
  );
}