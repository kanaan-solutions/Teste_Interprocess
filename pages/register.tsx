import { useState, FormEvent } from "react";
import { Button } from "../components/Button";
import PageHeader from "../components/PageHeader";
import { PageTitle } from "../components/PageTitle";
import { useRouter } from 'next/router'

import { Container, Form, Input } from "../styles/registerStyles";

export default function Register() {
	const router = useRouter()

	const [name, setName] = useState<string>("");
	const [birthDate, setBirthDate] = useState<string>("");
	const [cpf, setCpf] = useState<string>();
	const [gender, setGender] = useState<string>("");
	const [adress, setAdress] = useState<string>("");
	const [status, setStatus] = useState<string>("");

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		try {
			const data = {
				name,
				birthDate,
				cpf,
				gender,
				adress,
				status
			}

			localStorage.setItem("userData", JSON.stringify(data))
			alert("Cadastro efetuado com sucesso")
			router.push("/")
		} catch (err) {
			alert("Erro no cadastro")
		}
	}

  return (
    <>
      <PageHeader arrow={true}  title="Acme" />
      
			<Container>
        <PageTitle title={"Formulário de Cadastro de Pacientes"} />.

        <Form>
          <Input 
						value={name} 
						type="text" 
						name="name" 
						placeholder="Nome" 
						onChange={(e) => {
								setName(e.target.value)
						}} 
					/>

          <Input 
						value={birthDate}
						type="text" 
						name="birthdate" 
						placeholder="Data de nascimento" 
						onChange={(e) => {
								setBirthDate(e.target.value)
						}}
					/>

          <Input 	
						value={cpf}
						type="text" 
						name="cpf" 
						placeholder="CPF" 
						onChange={(e) => {
								setCpf(e.target.value)
						}}
					/>

          <Input 
						value={gender}
						type="text" 
						name="gender" 
						placeholder="Gênero" 
						onChange={(e) => {
								setGender(e.target.value)
						}}
					/>

          <Input 
						value={adress}
						type="text" 
						name="address" 
						placeholder="Endereço" 
						onChange={(e) => {
								setAdress(e.target.value)
						}}
					/>

          <Input 
						value={status}
						type="text" 
						name="status" 
						placeholder="Status" 
						onChange={(e) => {
							setStatus(e.target.value)
						}}
					/>
        </Form>

				<Button 
					type="submit" 
					onClick={handleSubmit}
					title={"Cadastrar"}
				/>
      </Container>
    </>
  );
}


