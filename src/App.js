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
    <div className="App">
        <div className='container'>
          Width: {windowWidth} Height: {windowHeight}
        </div>
    </div>
  );
}

export default App;