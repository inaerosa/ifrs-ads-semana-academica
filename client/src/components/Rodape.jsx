import './Rodape.css'
import GBSeguros from '../assets/GBSeguros.png'
import DeboraVargas from '../assets/DeboraVargas.png'
import RD from '../assets/RD.jpeg'

function Rodape() {
  return (
    <>
        <div id="rodape">
        <div className="info">
            <h3>Instituto Federal do Rio Grande do Sul - Campus Osório</h3>
            <p>Rua Santos Dumont, 2127 | Bairro Albatroz | CEP: 95520-000 | Osório/RS</p>
          </div>
          
          {/* <div className="parceiros">
            <h3>Nossos patrocinadores</h3>
            <div className="logos">
              <a href="https://instagram.com/gbsegurosbrasil?igshid=MzRlODBiNWFlZA=="><img id="gbSeguros" src={GBSeguros} alt=""/></a>
              <a href="https://instagram.com/rd_assistenciatec?igshid=MzRlODBiNWFlZA=="><img src={RD} alt=""/></a>
              <a href="https://instagram.com/dvaarq?igshid=MzRlODBiNWFlZA=="><img src={DeboraVargas} alt=""  /></a>
            </div>
          </div> */}
        </div>
    </>
  )
}

export default Rodape;
