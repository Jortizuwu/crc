import React from 'react'
import { Toaster } from 'react-hot-toast'
import CrcComponent from './views/crc'

function App() {
  return (
    <div className="container">
      <CrcComponent />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Toaster />
    </div>
  )
}

export default App
