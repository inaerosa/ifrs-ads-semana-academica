import './MesaRedonda.css'
import People from '../assets/people.png'

function MesaRedonda() {

  return (
    <>
      <div id="MesaRedonda">
        <h1>Palestra: Uma jornada de adoção de Blockchain em ambientes de IoT: oportunidades e desafios</h1>
        <p>Palestrante: Roben Lunardi</p>
        <div className="mesa-redonda-content">
          <img id="mesa" src={People} alt="" />
          <div>
            <p>A tecnologia Blockchain surgiu como uma solução para fornecer transparência e confiabilidade de forma descentralizada e resiliente. Especialmente, existem potenciais benefícios na integração da tecnologia blockchain com a Internet das Coisas (IoT). No entanto, adotar blockchain em ambientes com restrições de hardware apresenta desafios importante. Essa integração introduz novos problemas, especialmente em escalabilidade, desempenho e segurança. Na última década, pesquisadores têm desenvolvido algoritmos e mecanismos para adaptar vários aspectos de blockchains "tradicionais" para uso em ambientes de IoT. Esta palestra tem por objetivo discutir os principais aspectos da jornada em direção à adoção de blockchain em ambientes de IoT, bem como os desafios e oportunidades neste campo de pesquisa.
              <br />
              <br />
              Venha participar!
            </p>
          </div>

        </div>

      </div>
    </>
  )
}

export default MesaRedonda;
