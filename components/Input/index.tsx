import { ChangeEventHandler, MouseEventHandler } from 'react';
import { Container, InputText, Legend, Label } from './styles';

interface InputProps {
  legend?: string;
  type: string;
  value: string;
  optionOne?: string;
  optionTwo?: string;
  placeholder?: string;
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
              onClick={onClickOne}
            />
            <Label>{optionOne}</Label>
          </div>

          <div>
            <input
              type={type}
              value={value}
              onClick={onClickTwo}
            />
            <Label>{optionTwo}</Label>
          </div>
        </Container>
      }
    </>
  );
}
