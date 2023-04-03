import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './Component/Navber/Navber'
import Price from './Component/Price/Price'
import Dasbord from './Component/Dasbord/Dasbord'
import Xois from './Component/Xois/Xois'

function App() {
//   const [count, setCount] = useState(0)

  return (
     
     <div>
          <Navber/>
          <Price></Price>
          <Dasbord></Dasbord>
          <Xois></Xois>
     </div>
  )
}

export default App
