import styled from 'styled-components';

export const Container = styled.div `
	display: flex;
	flex-direction: column;
	background-color: #8257E5;
	position: relative;
`;

export const TopBar = styled.div `
	width: 90%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #D4C2FF;
	padding: 1.6rem 0;
	
	> a {
		height: 3.2rem;
		transition: opacity 0.2s;
	}
	a:hover {
		opacity: 0.6;
	}
`;

export const Name = styled.h1 `
	font-size: 3rem;
	color: #D4C2FF;
`;	