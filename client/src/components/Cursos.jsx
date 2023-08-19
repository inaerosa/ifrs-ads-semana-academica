/* eslint-disable react/prop-types */
import './Cursos.css'

import Foguete from '../assets/foguete.png'

function Cursos() {
    const cursos = [
        {
            id: 0,
            title: 'Introdução ao Desenvolvimento Web com React',
            author: 'Ministrante: Marcelo Martins',
            description: 'Neste curso, você dará os primeiros passos no mundo do desenvolvimento web com React, explorando a criação de componentes e adquirindo uma compreensão sólida do ciclo de vida dessa poderosa biblioteca.'
        },
        {
            id: 1,
            title: 'Desenvolvimento Mobile com React Native',
            author: 'Ministrante: Max Carlesso',
            description: 'Nesse minicurso teremos um hands-on construindo um aplicativo do zero com React Native e Expo.'

        },
        {
            id: 2,
            title: 'Introdução à Impressão 3D',
            author: 'Ministrantes: Yuri Agliardi e Victor Pompeu',
            description: 'Descubra e domine conceitos básicos de impressão 3D como regulagem da impressora e parâmetros de configuração da impressão.'
        },
        {
            id: 3,
            title: 'Introdução à Robótica',
            author: 'Ministrantes: Yuri Agliardi e Vitor Nunes',
            description: 'Aprenda conceitos relacionados à robótica com o Arduino. Descubra componentes eletrônicos e desenvolva soluções para problemas reais.'
        }
    ]



    return (
        <div id="Cursos">
            <h1>Cursos</h1>
            <div id="cursos-container">
            <div className="cursos-content">
                <div className="curso">
                    <h3>{cursos[0].title}</h3>
                    <p>{cursos[0].author}</p>
                    <p>{cursos[0].description}</p>
                </div>
            <img id="foguete" src={Foguete} alt=""  />
            </div>
            <div className="cursos-content">
                <div className="curso">
                    <h3>{cursos[1].title}</h3>
                    <p>{cursos[1].author}</p>

                    <p>{cursos[1].description}</p>
                </div>
            </div>
            <div className="cursos-content">
                <div className="curso">
                    <h3>{cursos[2].title}</h3>
                    <p>{cursos[2].author}</p>
                    <p>{cursos[2].description}</p>
                </div>
            </div>
            <div className="cursos-content">
                <div className="curso">
                    <h3>{cursos[3].title}</h3>
                    <p>{cursos[3].author}</p>
                    <p>{cursos[3].description}</p>
                </div>
            </div>
            </div>
            
        </div>
  )
}

export default Cursos;
