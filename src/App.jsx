import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Mp3Btn } from './components/mp3Btn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mp3Btn/>
    </>
  )
}

export default App
