import './MesaRedonda.css'
import People from '../assets/people.png'

function MesaRedonda() {

  return (
    <>
        <div id="MesaRedonda">
        <h1>Mesa Redonda</h1>
            <div className="mesa-redonda-content">
                <img src={People} alt=""  />
                <div>
                  <p>No terceiro dia da nossa semana acadêmica, teremos um bate-papo com estudantes e egressos do curso de Análise e Desenvolvimento de Sistemas que já trabalham na área falando sobre a realidade do mercado de TI nos tempos atuais. 
                  <br/>
                  <br/>
                  
                  Com mediação do professor Bruno Fernandes, o bate-papo irá ocorrer com a finalidade de entender quais são os primeiros passos para começar a carreira, além disso, será disponibilizado um momento para responder dúvidas do público e trocar experiências
                  <br/>
                  <br/>
                  Venha participar!
                  </p>
                </div>
                
            </div>
          
        </div>
    </>
  )
}

export default MesaRedonda;
