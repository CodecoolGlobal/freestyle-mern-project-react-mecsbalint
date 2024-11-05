import { useState } from 'react'
import './App.css'

function App() {
  async function getDataFromServer(url){
    const data = await fetch(url).then(response => response.json());
    console.log(data);
  }
  {getDataFromServer('/api/test')}


  return (
    <>
    </>
  )
}

export default App
