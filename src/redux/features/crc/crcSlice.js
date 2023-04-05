import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  emitter: {
    Dx: '',
    Gx: '',
    complement: '',
    arrValues: [],
  },
  receptor: {
    Dx: '',
    Gx: '',
    complement: '',
    arrValues: [],
  },
}

export const crcSlice = createSlice({
  name: 'crc',
  initialState,
  reducers: {
    setEmitter: (state, payload) => {
      state.emitter = payload
    },
    setReceptor: (state, payload) => {
      state.receptor = payload
    },
  },
})

export const { setEmitter, setReceptor } = crcSlice.actions

export default crcSlice.reducer
