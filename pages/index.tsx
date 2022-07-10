import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'

import PageHeader from "../components/PageHeader";
import { Button } from "../components/Button";
import { BiSearchAlt } from 'react-icons/bi'
import { FaUserSlash } from 'react-icons/fa'

import {
  Container,
  SearchBarContainer,
  Patient,
  NoUsers,
} from '../styles/indexStyle';
import { PageTitle } from "../components/PageTitle";

interface IPatient {
  name: string;
  birthDate: string;
  cpf: string;
  gender: string;
  adress: string;
  status: string;
}

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
          <input
            type="text"
            placeholder="Digite o nome do paciente..."
            ref={inputRef}
            value={wordEntered}
            onChange={handleFilter}
          />
          <BiSearchAlt />
        </SearchBarContainer>

        {patient.length === 0 &&
          <NoUsers >
            <FaUserSlash size={63} color={"black"} />
            <PageTitle title={"Nenhum paciente cadastrado"} />
          </NoUsers>
        }

        {wordEntered.length !== 0 ? (
          <Patient>
            {filteredData.map(({ name }, key) => (
              <h1 key={key}>
                {name}
              </h1>
            ))}
          </Patient>
        ) :
          <Patient>
            {patient.map((item: IPatient) => (
              <div key={item.cpf}>
                <h1>{item.name}</h1>
                <h1>{item.gender}</h1>
                <h1>{item.status}</h1>
              </div>
            ))}
          </Patient>
        }

        <Button
          type="submit"
          onClick={() => router.push("/register")}
          title={"Novo usuário"}
        />
      </Container>
    </>
  );
}
