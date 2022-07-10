import { ChangeEventHandler, MouseEventHandler, RefObject } from 'react';
import { Container, InputText, Legend, Label } from './styles';

interface InputProps {
  legend?: string;
  type: string;
  value: string;
  optionOne?: string;
  optionTwo?: string;
  placeholder?: string;
  ref?: RefObject<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClickOne?: MouseEventHandler<HTMLInputElement>
  onClickTwo?: MouseEventHandler<HTMLInputElement>
}

export function Input({
  legend,
  type,
  value,
  optionOne,
  optionTwo,
  placeholder,
  ref,
  onChange,
  onClickOne,
  onClickTwo,
}: InputProps) {
  return (
    <>
      {type === "text" &&
        <InputText
          value={value}
          type={type}
        ref={ref}
          placeholder={placeholder}
          onChange={onChange}
        />
      }

      {type === "checkbox" &&
        <Container>
          <Legend>{legend}</Legend>

          <div>
            <input
              type={type}
              value={value}
              ref={ref}
              onClick={onClickOne}
            />
            <Label>{optionOne}</Label>
          </div>

          <div>
            <input
              type={type}
              value={value}
              ref={ref}
              onClick={onClickTwo}
            />
            <Label>{optionTwo}</Label>
          </div>
        </Container>
      }
    </>
  );
}
