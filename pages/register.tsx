import PageHeader from "../components/PageHeader";

export default function Register() {
  return (
    <>
      <PageHeader />
      
			<div>
        <h1>Formulário de cadastro de usuários</h1>

        <form>
          <input type="text" name="name" placeholder="Nome" />
          <input type="date" name="birthdate" placeholder="Data de nascimento" />
          <input type="text" name="cpf" placeholder="CPF" />
          <input type="checkbox" name="gender" placeholder="Gênero" />
          <input type="text" name="address" placeholder="Endeeço" />
          <input type="checkbox" name="address" placeholder="Status" />
        </form>
      </div>
    </>
  );
}


