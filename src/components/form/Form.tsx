import { useForm, type SubmitHandler } from "react-hook-form";
import { Container } from "../container";
import Input from "../input/Input";
import Button from "../button/Button";
import styles from './Form.module.scss';
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../schemas/formValidation";
import { calculateMortgage } from "../../features/calculateMortgage";
import RadioGroup from "../radioGroup/RadioGroup";

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

  const handleResetForm = () => {
    reset();
    onClear();
  };

  return (
    <Container status="primary">
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.headWrapper}>
            <h1 className="title">Mortgage Calculator</h1>
            <Button
              type="button"
              classNameProp="clear"
              onClick={handleResetForm}
            >
              Clear All
            </Button>
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

          <RadioGroup
            name="mortgage-type"
            register={register}
            watch={watch}
            radios={[
              {value: 'Repayment', label: 'Repayment'},
              {value: 'Interest', label: 'Interest Only'},
            ]}
            error={errors['mortgage-type']}
          >
            Mortgage Type
          </RadioGroup>

          <Button type="submit" classNameProp="send">
            <img src="icon-calculator.svg" alt="calculator" />
            Calculate Repayments
          </Button>
        </form>
        
      </div>
    </Container>
  );
}
