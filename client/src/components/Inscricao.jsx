import { useForm, FormProvider } from 'react-hook-form';
import Card from './Card';
import './Inscricao.css';
import axios from 'axios';
import { useState } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");

function Inscricao() {

  const [nome, setNome] = useState('');

  const methods = useForm();

  const onSubmit = async (data) => {
    const student = data;
    setNome(student.nome)
    toggleModal()
    try{
      await axios.post('http://localhost:3000/api', student);
    }catch(err) {
      console.error(err)
    }

   };
   
   const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <h3>Olá, {nome} </h3>
        <p>Sua inscrição foi confirmada com sucesso!</p>
      </Modal>
      <div id="Inscricao">
        <h1>Inscrições</h1>
        <FormProvider {...methods}>
          <div className="form-content">
            <Card
              content="teste"
              title="Informações Pessoais"
            />
            <Card
              title="Primeiro dia"
              date="22/08 - Terça-feira"
              sub="das 19h15 às 22h30"
              content="first-day"
            />
            <Card
              title="Segundo dia"
              date="23/08 - Quarta-feira"
              sub="das 19h15 às 22h30"
              content="second-day"
            />
            <Card
              title="Terceiro dia"
              date="24/08 - Quinta-feira"
              sub="das 19h15 às 22h30"
              content="three-day"
            />
          </div>
          <button id="btn-submit" type="submit" onClick={methods.handleSubmit(onSubmit)}>Inscrever-se</button>
        </FormProvider>
      </div>
    </>
  );
}

export default Inscricao;
