import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/diary" element={<Diary/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/new" element={<New/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
