import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'

import PageHeader from "../components/PageHeader";
import { Button } from "../components/Button";
import { IPatient } from '../types/Interfaces'
import { FaUserSlash } from 'react-icons/fa'

import {
  Container,
  SearchBarContainer,
  NoUsers,
  Table
} from '../styles/indexStyle';
import { PageTitle } from "../components/PageTitle";
import { Input } from '../components/Input';
import { PatientCard } from '../components/PatientCard';

export default function Register() {
  const router = useRouter()
  const [patient, setPatient] = useState<IPatient[] | undefined>([])

  const [filteredData, setFilteredData] = useState<IPatient[]>([])
  const [wordEntered, setWordEntered] = useState<string>("")

  const inputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null)
  window.addEventListener("load", () => inputRef.current?.focus())

  useEffect(() => {
    const getPatientData = () => {
      const response = localStorage.getItem("patientData");

      if (!response) {
        localStorage.setItem('patientData', JSON.stringify(null));
      }

      if (typeof response !== undefined) {
        const patientDataParse = JSON.parse(response)
        setPatient(patientDataParse)
      }
    }

    getPatientData();
  }, [])

  const handleFilter = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const searchWord: string = target.value.toLowerCase()
    setWordEntered(searchWord)

    const newFilter: IPatient[] = patient.filter(({ name }): boolean =>
      name.toLowerCase().includes(searchWord)
    )

    if (!searchWord) {
      setFilteredData(patient)
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = (): void => {
    setFilteredData([])
    setWordEntered("")
    inputRef.current?.focus()
  }

  return (
    <>
      <PageHeader title="ACME" />

      <Container>
        <PageTitle title={"Lista de Pacientes"} />
        <SearchBarContainer>
          <Input
            type="text"
            placeholder="Digite o nome do paciente..."
            ref={inputRef}
            value={wordEntered}
            onChange={handleFilter}
          />
        </SearchBarContainer>

        {!patient &&
          <NoUsers >
            <FaUserSlash size={63} color={"black"} />
            <PageTitle title={"Nenhum paciente cadastrado"} />
          </NoUsers>
        }

        {wordEntered.length !== 0 ? (
          <Table>
            {filteredData.map((item: IPatient, index) => (
              <PatientCard
                id={item.id}
                name={item.name}
                birthDate={item.birthDate}
                cpf={item.cpf}
                gender={item.gender}
                address={item.address}
                status={item.status}
                navigation={() => router.push({
                  pathname: '/edit/[id]',
                  query: {
                    patientId: item.id,
                    patientName: item.name,
                    patientBirthDate: item.birthDate,
                    patientCpf: item.cpf,
                    patientGender: item.gender,
                    patientAddress: item.address,
                    patientStatus: item.status,
                    index: index,
                  },
                })}
              />
            ))}
          </Table>
        ) :
          <Table>
            {patient?.map((item: IPatient, index) => (
              <PatientCard
                id={item.id}
                name={item.name}
                birthDate={item.birthDate}
                cpf={item.cpf}
                gender={item.gender}
                address={item.address}
                status={item.status}
                navigation={() => router.push({
                  pathname: '/edit/[patientId]',
                  query: {
                    patientId: item.id,
                    patientName: item.name,
                    patientBirthDate: item.birthDate,
                    patientCpf: item.cpf,
                    patientGender: item.gender,
                    patientAddress: item.address,
                    patientStatus: item.status,
                    index: index,
                  },
                })}
              />
            ))}
          </Table>
        }

        <Button
          type="submit"
          onClick={() => router.push({
            pathname: "/register", 
            // query: { patientCpf: cpf, }
          })}
          title={"Novo usuário"}
        />
      </Container>
    </>
  );
}
