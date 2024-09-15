import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { Mp3Btn } from './components/mp3Btn'
import FileUpload from './components/FileUpload'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FileUpload/>
    <Mp3Btn/>
    </>
  )
}

export default App
