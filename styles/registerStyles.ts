import styled from 'styled-components';

export const Container = styled.div `
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	align-items: center;
`;

export const Form = styled.form `
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
`;

export const Input = styled.input `
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