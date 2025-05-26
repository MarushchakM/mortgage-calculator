import { useForm, type SubmitHandler } from "react-hook-form";
import { ClearButton } from "../clearButton";
import { Container } from "../container";
import Input from "../input/Input";
import Radio from "../radio/Radio";
import Button from "../button/Button";
import styles from './Form.module.scss';
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../schemas/formValidation";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { calculateMortgage } from "../../features/calculateMortgage";

export type IForm = {
  amount: number;
  term: number;
  rate: number;
  'mortgage-type': string;
};

type Props = {
  onCalculated: (monthly: number, total: number) => void;
  onClear: () => void;
}
export const Form: React.FC<Props> = ({onCalculated, onClear}) => {
  const { register, watch, handleSubmit, formState: { errors }, reset } = useForm<IForm>({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });



  const onSubmit: SubmitHandler<IForm> = (data) => onCalculated(
    calculateMortgage(data).monthly, calculateMortgage(data).total
  );

  return (
    <Container status="primary">
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.headWrapper}>
            <h1 className="title">Mortgage Calculator</h1>
            <ClearButton reset={reset} onClear={onClear} />
          </div>
        
          <Input 
            name="amount" 
            icon="£" 
            orient="left" 
            register={register} 
            error={errors.amount}
          >
            Mortgage Amount
          </Input>

          <Input 
            name="term" 
            icon="years" 
            orient="right" 
            register={register}
            error={errors.term}
          >
            Mortgage Term
          </Input>

          <Input 
            name="rate" 
            icon="%" 
            orient="right" 
            register={register}
            error={errors.rate}
          >
            Interest Rate
          </Input>

          <div className={styles.radios}>
            <h3>Mortgage Type</h3>
            <Radio name="mortgage-type" value='Repayment' register={register} watch={watch}>
              Repayment
            </Radio>
            <Radio name="mortgage-type" value='Interest' register={register} watch={watch}>
              Interest Only
            </Radio>

            {errors['mortgage-type'] && <ErrorMessage message={errors['mortgage-type']?.message} />}
          </div>

          <Button><img src="icon-calculator.svg" alt="calculator"/>Calculate Repayments</Button>
        </form>
        
      </div>
    </Container>
  );
}
