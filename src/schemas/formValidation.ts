import * as yup from "yup";

export const validationSchema = yup.object({
  amount: yup
    .number()
    .typeError('Mortgage amount must be a number')
    .required('Please enter a mortgage amount')
    .positive('Mortgage amount must be a positive number')
    .min(1, 'Mortgage amount must be greater than 0'),

  term: yup
    .number()
    .typeError('Mortgage term must be a number')
    .required('Please enter a mortgage term')
    .integer('Mortgage term must be a whole number')
    .positive('Mortgage term must be positive')
    .min(1, 'Mortgage term must be at least 1 year')
    .max(50, 'Maximum mortgage term is 50 years'),

  rate: yup
    .number()
    .typeError('Interest rate must be a number')
    .required('Please enter an interest rate')
    .positive('Interest rate must be positive')
    .min(0.01, 'Interest rate must be greater than 0'),

  'mortgage-type': yup
    .string()
    .required('Please select a mortgage type')
    .oneOf(['Repayment', 'Interest'], 'Invalid mortgage type selected'),
});