import { combineReducers } from '@reduxjs/toolkit'

import crcReducer from './features/crc/crcSlice'

const rootReducer = combineReducers({
  crc: crcReducer,
})

export default rootReducer
