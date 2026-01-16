import React from 'react'
import './App.css'
import { NavBar } from './components/navBar'
import { LinkVault } from './components/LinkVault'

function App() {
  return (
    <div className="app-container">
      <NavBar/>
      <main className="app-main">
        <LinkVault />
      </main>
    </div>
  )
}

export default App
