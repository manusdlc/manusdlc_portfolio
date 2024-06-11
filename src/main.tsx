import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/Home'
import Filter from './components/projects/Filter'
import Cern from './components/projects/Cern'
import Robotito from './components/projects/Robotito'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/filter" element={<Filter />} />
        <Route path="/projects/cern" element={<Cern />} />
        <Route path="/projects/robotito" element={<Robotito />} />
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);