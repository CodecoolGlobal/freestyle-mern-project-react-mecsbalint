import { useState } from 'react'
import './App.css'
import Drawing from './components/Drawing'

function App() {
  const [yourCards, setYourCards] = useState(null);
  const [aiCards, setAiCards] = useState(null);
  const [yourTalon, setYourTalon] = useState(null);
  const [aiTalon, setAiTalon] = useState(null);

  return (
    <Drawing onDrawYourCards={setYourCards} onDrawAiCards={setAiCards} onDrawYourTalon={setYourTalon} onDrawAiTalon={setAiTalon}></Drawing>

  )
}

export default App
