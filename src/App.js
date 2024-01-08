import { useEffect, useState } from 'react';

import './Reset.css'
import './App.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => { window.removeEventListener('resize', setWindowDimensions) }
  }, [])

  return (
    <>
      <div className='container'>
        {/* <p style={{fontSize: `${windowWidth/3}px` }}>severo</p> */}
        <div className='modal'>
          <h1>Retorna dimensões</h1>
          <p>A Largura da tela é <strong>{windowWidth} PX</strong></p>
          <p>A Altura da tela é <strong>{windowHeight} PX</strong></p>
        </div>
      <footer>
        <p><strong class="titulo">Tecnologias</strong> React - Javascript - HTML - CSS </p>
        <p>Este projeto foi desenvolvido por Severo</p>
        <ul class="menu_social">
          <li><a class="social_linkedin" href="https://www.linkedin.com/in/severidade/">linkedin.com/in/severidade</a></li>
          <li><a class="social_github"href="https://github.com/severidade">github.com/severidade</a> </li>
          {/* <li><a class="social_codpen" href="https://codepen.io/severidade">codepen.io/severidade</a></li> */}
          <li><a class="social_behance" href="https://www.behance.net/severidade">behance.net/severidade</a></li>
        </ul>
      </footer>
      </div>
    </>
  );
}

export default App;
