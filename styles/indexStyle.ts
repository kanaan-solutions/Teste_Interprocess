import styled from 'styled-components';

export const Container = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
`;

export const PageTitle = styled.h1 `
	font-size: 2.5rem;
`;

export const SearchBarContainer = styled.div `
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 45%;
	height: 30px;
	margin-top: 2rem;
	border-radius: 8px;

	:hover {
		border-color: #8257E5;
	}
`;

export const NoUsers = styled.div `
	display:  flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 4rem;
	margin-bottom: 2rem;
`;

export const Table = styled.table`
  display: flex;
	flex-direction: column;
	margin-top: 2rem;
  border: 1px solid #c3c3c3;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;