import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/Home'
import Filter from './components/projects/Filter'
import Cern from './components/projects/Cern'
import Robotito from './components/projects/Robotito'
import withHeader from './components/Utils'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

interface Page {
  path: string;
  id: string;
  element: JSX.Element;
}

const ROUTES: Page[] = [
  { path: "/", id: "home", element: <Home /> },
  { path: "/projects/filter", id: "filter", element: <Filter /> },
  { path: "/projects/cern", id: "cern", element: <Cern /> },
  { path: "/projects/robotito", id: "robotito", element: <Robotito />},

]

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {ROUTES.map(route => <Route path={route.path} element={withHeader(route.id, route.element)} />)}
      </Routes>
    </BrowserRouter >
  </React.StrictMode>
);