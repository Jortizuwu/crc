import React from 'react'
import { Toaster } from 'react-hot-toast'
import CrcComponent from './views/crc'

function App() {
  return (
    <div className="container">
      <CrcComponent />
      <Toaster />
    </div>
  )
}

export default App
