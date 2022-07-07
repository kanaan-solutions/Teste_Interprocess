import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import PageHeader from "../components/PageHeader";
import { Button } from "../components/Button";
import { BiSearchAlt } from 'react-icons/bi'

import { 
  Container, 
  SearchBarContainer, 
  Patient,
} from '../styles/indexStyle';
import { PageTitle } from "../components/PageTitle";

export default function Register() {
  const router = useRouter()
  const [patient, setPatient] = useState<string[]>([])

  useEffect(() => {
    const getPatients = () => {
      try {
        const data = localStorage.getItem("userData")
        
        setPatient(JSON.parse(data))
      }catch(err) {
        console.log(err.response)
      }
    }

    getPatients();
  })

  return (
    <>
      <PageHeader title="ACME" />
      
      <Container>

        <PageTitle title={"Lista de Pacientes"} />
        <SearchBarContainer>
          <input type="text" placeholder="Digite o nome do paciente..." />
          <BiSearchAlt />
        </SearchBarContainer>   

        <Patient>
         <ul>
           {patient.map((item: string) => {
            <h1>{item.name}</h1>
           })}
         </ul>
        </Patient>

        
        <Button 
          type="submit" 
          onClick={() => router.push("/register")} 
          title={"Novo usuário"}  
        />
      </Container>
    </>
  );
}
