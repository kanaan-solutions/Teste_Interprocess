import React from 'react';
import { Container, MainTd, Td, Tr } from './styles';
import { AiOutlineEdit } from 'react-icons/ai';

interface PatientCardProps {
  id: number;
  name: string;
  birthDate?: string;
  cpf?: string;
  gender?: string;
  address?: string;
  status?: string;
}

export function PatientCard({
  id,
  name,
  birthDate,
  cpf,
  gender,
  address,
  status,
}: PatientCardProps) {
  return (
    <Container key={id}>
      <Tr>
        <MainTd>Nome</MainTd>
        <MainTd>Data de nascimento</MainTd>
        <MainTd>CPF</MainTd>
        <MainTd>Gênero</MainTd>
        <MainTd>Endereço</MainTd>
        <MainTd>Status</MainTd>
        <MainTd>Editar</MainTd>
      </Tr>

      <Tr>
        <Td>{name}</Td>
        <Td>{birthDate}</Td>
        <Td>{cpf}</Td>
        <Td>{gender}</Td>
        <Td>{address}</Td>
        <Td>{status}</Td>
        <Td>
          <a href='/register'>
            <AiOutlineEdit size={12} color={"black"} />
          </a>
        </Td>
      </Tr>
    </Container>
  );
}
