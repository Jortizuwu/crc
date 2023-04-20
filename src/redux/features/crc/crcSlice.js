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
  finishEmmitter: false,
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
    setFinishEmmitter: (state) => {
      state.finishEmmitter = true
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
      state.finishEmmitter = false
    },
  },
})

export const { setEmitter, setReceptor, setFinishEmmitter, restart } =
  crcSlice.actions

export default crcSlice.reducer
