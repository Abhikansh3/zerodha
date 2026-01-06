import './App.css'
import Landing from './Components/Landing';
import Navbar from './Components/Navbar'
import Responsibilities from './Components/Responsibilities';
import { useState } from 'react';


function App() {
  const [box, setBox] = useState(false)

  return (<>
    <Navbar setBox={setBox} />
    <Landing box={box} />

    <Responsibilities />
  </>
  )
}

export default App
