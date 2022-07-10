import React from 'react';

import { IInputProps } from '../../types/Interfaces';
import { InputText, Legend, Fieldset, OptionWrapper, Label } from './styles';

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
        <Fieldset>
          <Legend>{legend}</Legend>

          <OptionWrapper>
            <input
              type={type}
              value={value}
              ref={ref}
              onClick={onClickOne}
            />
            <Label>{optionOne}</Label>
          </OptionWrapper>

          <OptionWrapper>
            <input
              type={type}
              value={value}
              ref={ref}
              onClick={onClickTwo}
            />
            <Label>{optionTwo}</Label>
          </OptionWrapper>
        </Fieldset>
      }
    </>
  );
}
