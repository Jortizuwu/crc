import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  emitter: {
    Dx: '',
    Gx: '',
    GBinary: '',
    DBinary: '',
    complement: '',
    arrValues: [],
  },
  receptor: {
    Dx: '',
    Gx: '',
    GxBinary: '',
    DxBinary: '',
    complement: '',
    arrValues: [],
  },
}

export const crcSlice = createSlice({
  name: 'crc',
  initialState,
  reducers: {
    setEmitter: (state, payload) => {
      state.emitter = payload.payload
    },
    setReceptor: (state, payload) => {
      state.receptor = payload.payload
    },
    restart: (state) => {
      state.receptor = {
        Dx: '',
        Gx: '',
        GBinary: '',
        DBinary: '',
        complement: '',
        arrValues: [],
      }
      state.emitter = {
        Dx: '',
        Gx: '',
        GBinary: '',
        DBinary: '',
        complement: '',
        arrValues: [],
      }
    },
  },
})

export const { setEmitter, setReceptor, restart } = crcSlice.actions

export default crcSlice.reducer
