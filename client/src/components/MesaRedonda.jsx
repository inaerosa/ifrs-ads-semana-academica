import './MesaRedonda.css'
import People from '../assets/people.png'

function MesaRedonda() {

  return (
    <>
        <div id="MesaRedonda">
        <h1>Mesa Redonda: O Mercado de TI e as Novas Tecnologias</h1>
            <div className="mesa-redonda-content">
                <img src={People} alt=""  />
                <div>
                  <p>No terceiro dia da nossa semana acadêmica, mediado pela professora doutoranda da UFRGS, Bruna Flor da Rosa, teremos um bate-papo com alunos do curso que já estão atuando na área para entender quais foram os primeiros passos necessários para entrar no mercado, além disso, traremos dois desenvolvedores de diferentes áreas da TI para compreender melhor o cenário de TI atual e suas novas tecnologias. 
                  <br/>
                  <br/>
                  
                  Diferentemente de uma palestra, a ideia é construirmos um bate-papo com interação direta do público, a fim de trocarmos experiências.
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
