import React from 'react';

import { IInputProps } from '../../types/Interfaces';
import { Container, InputText, Legend, Label } from './styles';

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
}: IInputProps) {
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
