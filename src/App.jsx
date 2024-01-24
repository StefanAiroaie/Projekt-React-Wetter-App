import { Routes, Route } from 'react-router-dom'

import './App.css'
import Berlin from './pages/Berlin'
import London from './pages/London'
import Madrid from './pages/Madrid'
import Paris from './pages/Paris'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berlin" element={<Berlin />} />
        <Route path="/london" element={<London />} />
        <Route path="/madrid" element={<Madrid />} />
        <Route path="/paris" element={<Paris />} />
      </Routes>


    </>
  )
}

export default App
