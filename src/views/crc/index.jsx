import React from 'react'
import { useSelector } from 'react-redux'

import Simulator from './components/Simulator'
import Form from './components/Form'

const Crc = () => {
  const data = useSelector((state) => state.crc)

  return (
    <div className="crc">
      <h1 className="crc__title">CRC SIMULATOR</h1>
      {data.emitter.arrValues.length > 0 ? <Simulator /> : <Form />}
    </div>
  )
}

export default Crc
