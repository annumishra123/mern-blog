import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Siginin from './pages/Siginin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<Siginin />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/dasboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}
 

export default App
