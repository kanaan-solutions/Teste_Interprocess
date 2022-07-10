import React from 'react';

import { IPatientCardProps } from '../../utils/Interfaces';
import { Container, MainTd, Td, Tr } from './styles';
import { AiOutlineEdit } from 'react-icons/ai';


export function PatientCard({
  id,
  name,
  birthDate,
  cpf,
  gender,
  address,
  status,
  navigation,
}: IPatientCardProps) {
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
          <AiOutlineEdit size={12} color={"black"} onClick={navigation} />
        </Td>
      </Tr>
    </Container>
  );
}
