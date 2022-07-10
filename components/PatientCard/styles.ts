import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
	flex-direction: column;
`;

export const Tr = styled.tr`
  display: flex;
  line-height: 20px;
`;

export const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 1px solid #C3C3C3;
  width: 12rem;
  text-align: center;
  height: 3.5rem;
`;

export const MainTd = styled(Td) `
  font-size: 18px;
  font-weight: 700;
`;
