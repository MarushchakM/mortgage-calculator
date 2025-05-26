import type { IForm } from "../components/form";

export const calculateMortgage = (data: IForm) => {
  const P = data.amount; 
  const annualRate = data.rate; 
  const T = data.term; 
  const mortgageType = data['mortgage-type'];

  const monthlyRate = annualRate / 100 / 12; 
  const numberOfPayments = T * 12;

  let calculatedMonthlyPayment: number;
  let calculatedTotalRepayment: number;

  if (mortgageType === 'Repayment') {
    if (monthlyRate === 0) { 
        calculatedMonthlyPayment = P / numberOfPayments;
    } else {
        calculatedMonthlyPayment =
          P *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }
    calculatedTotalRepayment = calculatedMonthlyPayment * numberOfPayments;
  } else { 
    calculatedMonthlyPayment = P * monthlyRate;
    calculatedTotalRepayment = calculatedMonthlyPayment * numberOfPayments + P;
  }

  return ({
    monthly: Number(calculatedMonthlyPayment.toFixed(2)),
    total: Number(calculatedTotalRepayment.toFixed(2))
  });
};