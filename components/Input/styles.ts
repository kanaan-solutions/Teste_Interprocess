import styled from 'styled-components';

export const InputText = styled.input`
	height: 3rem;
	width: 25rem;
	border: 1px solid #c3c3c3;
	margin: 1rem;
	padding: 8px;
	border-radius: 8px;
	color: #fff;

	:hover {
		border-color: #191970;
	}

	::placeholder {
		color: white;
		font-weight: 500;
	}
`;

export const InputWrapper = styled.div`
	height: 3rem;
	width: 25rem;
	border: 1px solid #c3c3c3;
	margin: 1rem;
	padding: 8px;
	border-radius: 8px;
`;

export const Legend = styled.p`
  color: white;
  font-size: 16px;
`;

export const Fieldset = styled.fieldset`
	display: flex;
	margin: 1rem;
	align-items: center;
	border: 1px solid #c3c3c3;
	width: 25rem;	
	height: 3rem;
	padding: 8px;
	border-radius: 8px;

  :hover {
		border-color: #191970;
	}
`;

export const OptionWrapper = styled.div`
 display: flex;
	flex-direction: column;
	align-items: center;
  padding: 3rem;
`;

export const Label = styled(Legend)`
  
`;