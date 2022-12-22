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
    <div className='conteiner'>
      <div className='modal'>
        <h1>Retorna dimensões</h1>
        <p>A Largura da tela é <strong>{windowWidth}Px</strong></p>
        <p>A Altura da tela é <strong>{windowHeight}Px</strong></p>
      </div>
    </div>
  );
}

export default App;