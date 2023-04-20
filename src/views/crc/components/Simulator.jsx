import Divition from '@src/components/crc/Division'
import { restart } from '@src/redux/features/crc/crcSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Simulator = () => {
  const { emitter, receptor, finishEmmitter } = useSelector(
    (state) => state.crc
  )
  const dispatch = useDispatch()

  const handleRest = () => {
    dispatch(restart())
  }

  return (
    <div className="simulator">
      <button onClick={handleRest} type="button" className="btn-danger">
        rest
      </button>
      <div className="simulator__content">
        <Divition data={emitter} name="emitter" />
        {finishEmmitter && <Divition data={receptor} name="receptor" />}
      </div>
    </div>
  )
}

export default Simulator
