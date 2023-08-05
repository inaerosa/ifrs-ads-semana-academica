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
                  <p>No terceiro dia da nossa semana acadêmica, teremos um bate-papo com os estudantes Lucas Alves, Inaê Rosa e Max Carlesso do curso de Análise e Desenvolvimento de Sistemas que já trabalham na área, o desenvolvedor fullstack da Sebrae Gilto Barcela e o analista de negócios da Devintec, XXXXX, falando sobre o mercado de TI nos tempos atuais. 
                  <br/>
                  <br/>
                  
                  Com mediação da professora Bruna Flor da Rosa, o bate-papo irá ocorrer com a finalidade de entender quais são os primeiros passos para começar a carreira, além  de compreender o cenário atual do mercado de TI. Com um espaço aberto para interação do público, nosso maior objetivo é trocarmos experiências!
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
