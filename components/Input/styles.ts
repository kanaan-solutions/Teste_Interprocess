import styled from 'styled-components';

export const InputText = styled.input`
	height: 3rem;
	width: 25rem;
	border: 1px solid #9a9a9a;
	margin: 1rem;
	padding: 8px;
	border-radius: 8px;
	color: black;

	:hover {
		border-color: #3EBAD6;
	}
	::placeholder {
		color: black;
		font-weight: 500;
	}
`;

export const InputWrapper = styled.div`
	height: 3rem;
	width: 25rem;
	border: 1px solid white;
	margin: 1rem;
	padding: 8px;
	border-radius: 8px;
`;

export const Legend = styled.p`
  color: black;
  font-size: 16px;
`;

export const Fieldset = styled.fieldset`
	display: flex;
	margin: 1rem;
	align-items: center;
	border: 1px solid #9a9a9a;
	width: 25rem;	
	height: 3rem;
	padding: 8px;
	border-radius: 8px;

  :hover {
		border-color: #3EBAD6;
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