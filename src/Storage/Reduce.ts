import { createSlice } from '@reduxjs/toolkit'
import { BD } from '../../types.global'
const initialState: BD = {
  Auth: false,
  Clientes: [],
  Repartidores: [],
  Stock: [],
  Usuarios: [],
  Vehiculos: []
}
export const configDB = createSlice({
  name: 'configDB',
  initialState,
  reducers: {
    addClients: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Clientes: payload
      }
    },
    addRepartidores: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Repartidores: payload
      }
    },
    addStock: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Stock: payload
      }
    },
    addUsers: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Usuarios: payload
      }
    },
    addVehicles: (state, action) => {
      const { payload } = action
      return {
        ...state,
        Vehiculos: payload
      }
    },
    authenticate: (state, action) => {
      return {
        ...state,
        Auth: action.payload
      }
    }
  }
})

export const {
  authenticate,
  addClients,
  addRepartidores,
  addStock,
  addUsers,
  addVehicles
} = configDB.actions

export default configDB.reducer
