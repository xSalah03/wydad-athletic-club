import React from 'react'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='app' >
      <div className='back'>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}

export default App