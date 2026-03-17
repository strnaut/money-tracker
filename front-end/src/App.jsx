import React from 'react'
import Login from './sessions/authentication/login'
import FirstContent from './sessions/FirstContent'

function App() {
  return (
    <div className='bg-black'>
      <FirstContent />
      <Login />
    </div>
  )
}

export default App