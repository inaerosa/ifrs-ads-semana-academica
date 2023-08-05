import './Rodape.css'
import People from '../assets/people.png'


function Rodape() {
  return (
    <>
        <div id="rodape">
        <div className="info">
            <h3>Instituto Federal do Rio Grande do Sul - Campus Osório</h3>
            <p>Rua Santos Dumont, 2127 | Bairro Albatroz | CEP: 95520-000 | Osório/RS</p>
          </div>
          
          <div className="parceiros">
            <h3>Nossos patrocinadores</h3>
            <div className="logos">
              <img src={People} alt=""  />
              <img src={People} alt=""  />
              <img src={People} alt=""  />
            </div>
          </div>
        </div>
    </>
  )
}

export default Rodape;
