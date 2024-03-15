import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.component'
import MainGame from './components/MainGame/MainGame.component'
import Rules from './components/Rules/Rules.component';

function App() {

  const [score, setScore] = useState(0);
  const handleScore = () => {
    setScore(prev => prev + 1);
  }
  return (
    <div className="main-game">

      <Header score={score} />
      <MainGame handleScore={handleScore} />
      <Rules />

    </div>

  )
}

export default App
