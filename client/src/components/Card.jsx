/* eslint-disable react/prop-types */
import { useFormContext } from 'react-hook-form';

import './Card.css';

//Função que verifica se um cpf é válido usando o algoritmo da Receita Federal
//Verifica também se os pontos e o traço estão na posição correta

// function validaCPF(cpf){
// 	if((cpf[3] == ".")
// 		&&(cpf[7] == ".")
// 		&&(cpf[11] == "-")
// 		&&(cpf.length == 14)
// 		&&(!isNaN(cpf.substring(0,3)))
// 		&&(!isNaN(cpf.substring(4,7)))
// 		&&(!isNaN(cpf.substring(8,11)))
// 		&&(!isNaN(cpf.substring(12)))
// 		&&(((parseInt(cpf[0])*10
// 			+parseInt(cpf[1])*9
// 			+parseInt(cpf[2])*8
// 			+parseInt(cpf[4])*7
// 			+parseInt(cpf[5])*6
// 			+parseInt(cpf[6])*5
// 			+parseInt(cpf[8])*4
// 			+parseInt(cpf[9])*3
// 			+parseInt(cpf[10])*2)
// 		    *10%11) == parseInt(cpf[12]))
// 		&&(((parseInt(cpf[0])*11
// 			+parseInt(cpf[1])*10
// 			+parseInt(cpf[2])*9
// 			+parseInt(cpf[4])*8
// 			+parseInt(cpf[5])*7
// 			+parseInt(cpf[6])*6
// 			+parseInt(cpf[8])*5
// 			+parseInt(cpf[9])*4
// 			+parseInt(cpf[10])*3
// 			+parseInt(cpf[12])*2)
// 		    *10%11) == parseInt(cpf[13]))
// 		&& !(cpf[0] == cpf[1] == cpf[2] == cpf[4] == cpf[5] == cpf[6] == cpf[8] == cpf[9] == cpf[10] == cpf[12] == cpf[12])
// 		){
// 		return true;
// 	}else{
// 		return 'CPF inválido';
// 	}
// }

const Card = ({ content, title, date, sub }) => {
  const { register, formState: { errors }, resetField } = useFormContext();
  // const [inputCPF, setInputCPF] = useState();

  const renderCardContent = () => {
    if (content === 'first-day') {
      return (
        <>
          <p>Mini-cursos</p>
          <div className="checkbox-inputs">
            <label htmlFor="docker"></label>
            <input
              {...register('primeiro_dia')}
              type="checkbox"
              name="primeiro_dia"
              value="docker"
              className="form-check-input"
              id="docker"
            />{' '}
            <label>Introdução à Docker</label>
          </div>
          {/* <label htmlFor="React"></label>
          <div className="checkbox-inputs">
            <label htmlFor="teste">
              <div className="esgotado">
                Introdução ao desenvolvimento web com React
              </div>
              <span>Esgotado</span>
            </label>
          </div> */}
          <button
            type="button"
            onClick={() => resetField("primeiro_dia", { defaultValue: '' })}
          >
            Desmarcar opções
          </button>
        </>
      );
    } else if (content === 'second-day') {
      return (
        <>
          <p>Mini-cursos</p>
          <div className="checkbox-inputs">
            <input
              {...register('segundo_dia')}
              type="checkbox"
              name="segundo_dia"
              value="devOps"
              className="form-check-input"
              id="devOps"
            />{' '}
            <label htmlFor="devOps">
            Princípios fundamentais do DevOps
            </label>
          </div>
          {/* <div className="checkbox-inputs">

            <label htmlFor="teste">
              <div className="esgotado">
                Desenvolvimento Mobile com React Native
              </div>
              <span>Esgotado</span>
            </label>
          </div> */}
          <button
            type="button"
            onClick={() => resetField("segundo_dia", { defaultValue: '' })}
          >
            Desmarcar opções
          </button>
        </>
      );
    } else if (content === 'three-day') {
      return (
        <>
          <p>Palestras: </p>
          <div className="checkbox-inputs">
            <input type="checkbox" name="mesa_redonda" id="mesa_redonda" {...register('mesa_redonda')} />
            <label>Uma jornada de adoção de Blockchain em ambientes de IoT: oportunidades e desafios </label>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div id="info">
            <label>Nome completo</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Seu nome completo"
              {...register('nome',
                {
                  minLength: {
                    value: 5,
                    message: "Insira seu nome completo"
                  },
                  required: 'Nome é um campo obrigatório'
                }
              )
              }

            />
            <label>CPF</label>
            <input
              type="text"
              name="CPF"
              id="CPF"
              placeholder='Seu CPF: XXX.XXX.XXX-XX'
              {...register('cpf', {
                required: 'CPF é obrigatório',
              })}

            />
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Seu email"
              {...register('email', {
                required: 'E-mail é um campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "E-mail invalido"
                }
              })}
            />
            <label>Escola ou instituição</label>
            <input
              type="text"
              name="instituicao"
              id="instituicao"
              placeholder="Sua escola ou instituição"
              {...register('instituicao', { required: 'Escola ou instituição é um campo obrigatório' })}

            />

            {errors.nome && <span className="error-message">{errors.nome.message}</span>}
            {errors.email && <span className="error-message">{errors.email.message}</span>}
            {errors.cpf && <span className="error-message">{errors.cpf.message}</span>}
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
