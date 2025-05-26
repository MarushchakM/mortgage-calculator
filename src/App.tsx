import { useState } from 'react';
import './App.scss'
import { Form } from './components/form';
import Result from './components/result/Result';

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalRepayment, setTotalRepayment] = useState<number | null>(null);

  const handleCalculatedResults = (monthly: number, total: number) => {
    setMonthlyPayment(monthly);
    setTotalRepayment(total);
  };
  
  const handleClearResult = () => {
    setMonthlyPayment(null);
    setTotalRepayment(null);
  }
  console.log(monthlyPayment);
  return (
    <div className='calculator'>
      <Form
        onCalculated={handleCalculatedResults}
        onClear={handleClearResult}
      />
      <Result monthly={monthlyPayment} total={totalRepayment} />
    </div>
  );
}

export default App
