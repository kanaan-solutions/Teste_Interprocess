import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router'
import * as masks from '../../types/plugins/masks';

import PageHeader from "../../components/PageHeader";
import { Button } from "../../components/Button";

import {
  Container,
  Form
} from '../../styles/editStyles';
import { PageTitle } from "../../components/PageTitle";
import { Input } from '../../components/Input';

export default function Register() {
  const router = useRouter()
  const {
    patientId,
    patientName,
    patientBirthDate,
    patientCpf,
    patientGender,
    patientAddress,
    patientStatus
  } = router.query;

  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [cpf, setCpf] = useState<string>();
  const [gender, setGender] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [status, setStatus] = useState<string>("");


  useEffect(() => {
    console.log(patientId)
    console.log(patientName)
    console.log(patientBirthDate)
    console.log(patientCpf)
    console.log(patientGender)
    console.log(patientAddress)
    console.log(patientStatus)
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const patients = await localStorage.getItem("patientData");

    let patientArray = [];

    if (patients) {
      patientArray = JSON.parse(patients);
    }

    patientArray.push({ id: Math.random(), name, birthDate, cpf, gender, address, status })

    await localStorage.setItem('patientData', JSON.stringify(patientArray));
    alert("Deu certo")
    console.log(patientArray)

    router.push("/")
  }

  return (
    <>
      <PageHeader title="ACME" />

      <Container>
        <PageTitle title={"Edite"} />

        <Form>
          <Input
            value={masks.completeName(name) || patientName}
            type="text"
            placeholder="Nome:"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />

          <Input
            value={masks.birthDate(birthDate) || patientBirthDate}
            type="text"
            placeholder="Data de nascimento:"
            onChange={(e) => {
              setBirthDate(e.target.value)
            }}
          />

          <Input
            value={masks.cpfMask(cpf) || patientCpf}
            type="text"
            placeholder="CPF:"
            onChange={(e) => {
              setCpf(e.target.value)
            }}
          />

          <Input
            legend="Gênero:"
            type="checkbox"
            value={gender}
            optionOne="Feminino"
            optionTwo="Masculino"
            onClickOne={() => setGender("Feminino")}
            onClickTwo={() => setGender("Masculino")}
          />

          <Input
            value={address || patientAddress}
            type="text"
            placeholder="Endereço:"
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />

          <Input
            legend="Status:"
            type="checkbox"
            value={status}
            optionOne="Ativo"
            optionTwo="Inativo"
            onClickOne={() => setStatus("Ativo")}
            onClickTwo={() => setStatus("Inativo")}
          />
        </Form>

        <Button
          type="submit"
          onClick={handleSubmit}
          title={"Atualizar Cadastro"}
        />
      </Container>
    </>
  );
}
