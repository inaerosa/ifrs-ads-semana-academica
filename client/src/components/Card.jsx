/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';
import './Card.css';

const Card = ({ content, title, date, sub }) => {
  const { register, formState: { errors } } = useFormContext();


  const renderCardContent = () => {
    if (content === 'first-day') {
      return (
        <>
          <p>Mini-cursos</p>
          <div className="checkbox-inputs">
          <label htmlFor="impressão 3D"></label>
          <input
              {...register('primeiro_dia', { required: true })}
              type="radio"
              name="primeiro_dia"
              value="impressao"
              className="form-check-input"
              id="impressao"
            />{' '}
            <label>Introdução à impressão 3D  </label>  
          </div>
          <label htmlFor="React"></label>
          <div className="checkbox-inputs">
            <input
              {...register('primeiro_dia', { required: true })}
              type="radio"
              name="primeiro_dia"
              value="react"
              className="form-check-input"
              id="react"
            />{' '}
            <label>Introdução ao Desenvolvimento Web com React</label>
          </div>
        </>
      );
    } else if (content === 'second-day') {
      return (
        <>
          <p>Mini-cursos</p>
          <div className="checkbox-inputs">
          <input
              {...register('segundo_dia', { required: true })}
              type="radio"
              name="segundo_dia"
              value="Robotica"
              className="form-check-input"
              id="Robotica"
            />{' '}
            <label htmlFor="robótica">
              Introdução à Robótica
            </label>
          </div>
          <div className="checkbox-inputs">
          <input
              {...register('segundo_dia', { required: true })}
              type="radio"
              name="segundo_dia"
              value="react-native"
              className="form-check-input"
              id="react-native"
            />{' '}
            <label htmlFor="teste">
              Aplicações Mobile(React Native)
            </label>
          </div> 
        </>
      );
    } else if (content === 'three-day') {
      return (
        <>
        <p>Palestras: </p>
        <div className="checkbox-inputs">
            <input type="checkbox" name="mesa_redonda" id="mesa_redonda" {...register('mesa_redonda')}/>
            <label>Mesa Redonda: </label>
        </div>
    </>
      );
    } else {
      return (
        <>
          <div id="info">
          <label>Nome</label>
            <input 
              type="text" 
              name="nome" 
              id="nome" 
              placeholder="Seu nome"
              {...register('nome', { required: 'Nome é um campo obrigatório' })}
            />
          <label>CPF</label>
            <input 
              type="text" 
              name="CPF" 
              id="CPF" 
              placeholder="Seu CPF"
              {...register('CPF', { required: 'CPF é um campo obrigatório', message: "CPF invalido" })}

            /> 
          <label>E-mail</label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="Seu email"
              {...register('email', {
                required: 'E-mail é um campo obrigatório', 
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "E-mail invalido"
              } })}
            />
          <label>Escola ou instituição</label>
            <input 
              type="text" 
              name="instituicao" 
              id="instituicao" 
              placeholder="Sua escola ou instituição"
              {...register('instituicao', { required: 'Escola ou instituição é um campo obrigatório'})}

            />

            {errors.nome && <span className="error-message">{errors.nome.message}</span>}
            {errors.email && <span className="error-message">{errors.email.message}</span>}
            {errors.CPF && <span className="error-message">{errors.CPF.message}</span>}
            {errors.instituicao && <span className="error-message">{errors.instituicao.message}</span>}
          </div>
       
        </>
      );
    }
  };

  return (
    <div id="Card">
      <div className="card-content">
        <div className="card-header">
          <h2>{title}</h2>
          <h3>{date}</h3>
          <h3>{sub}</h3>
        </div>
        <form>
          {renderCardContent()}
        </form>
      </div>
    </div>
  );
};

export default Card;
