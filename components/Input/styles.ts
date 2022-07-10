import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
	flex-direction: column;
	margin-top: 2rem;
	align-items: center;
`;

export const InputText = styled.input`
	height: 3rem;
	width: 25rem;
	border: 1px solid #c3c3c3;
	margin: 1rem;
	padding: 8px;
	border-radius: 8px;

	:hover {
		border-color: #8257E5;
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
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

export const Label = styled(Legend)``;