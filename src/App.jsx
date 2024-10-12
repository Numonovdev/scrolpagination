import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route, Link } from 'react-router-dom'
import Scrol from './pages/Scrol'

function App() {

  return (
    <>
      <header className='w-ful max-w-7xl mx-auto mt-10 h-20 flex justify-center gap-2 items-center shadow-lg shadow-black-500/40'>
        <Link className='no-underline text-black font-bold py-2 px-4 rounded-md hover:text-white hover:bg-violet-600' to='/'> Home</Link>
        <Link className='no-underline text-black font-bold py-2 px-4 rounded-md hover:text-white hover:bg-violet-600' to='/scrol'>Scrol pagination</Link>
      </header>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/scrol' element={<Scrol/>}></Route>
       </Routes>
    </>
  )
}

export default App
