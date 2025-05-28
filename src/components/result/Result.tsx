import { Container } from '../container';
import styles from './Result.module.scss';

type Props = {
  monthly: number | null;
  total: number | null;
}

const Result: React.FC<Props> = ({ monthly, total}) => {
  return (
    <Container status='secondary'>
      
      {monthly && total ? (
        <div className={styles.result}>
          <h2>
            Your results
          </h2>
          <p>
            Complete the form and click “calculate repayments”
            to see what your monthly repayments would be
          </p>
          <div className={styles.resultBlock}>
            <div className={styles.monthly}>
              <p>Your monthly repayments</p>
              <p className={styles.monthlyMoney}>
                £{monthly.toLocaleString('en-US')}
              </p>
            </div>

            <div className={styles.total}>
              <p>Total you'll repay over the term</p>
              <p className={styles.totalMoney}>
                £{total.toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.resultEmpty}>
          <img src="illustration-empty.svg" alt="empty" />
          <h2>
            Results shown here
            </h2>
            <p>
              Complete the form and click “calculate repayments”
              to see what your monthly repayments would be.
            </p>
        </div>
        )}
      
    </Container>
    
  );
};

export default Result;
