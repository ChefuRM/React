import { useState } from 'react'
import { Vehiculo } from '../../types.global'
import { API_CODES, API_URL_PROD } from '../Config/API'

interface API_RESPONSE{
    code: number,
    data: Vehiculo[],
    message: string
}
const DEFAULT_RESPONSE = {
  code: API_CODES.dataEmpty,
  data: [],
  message: ''
}

export const useGetVehicles = () => {
  const [loading, setLoading] = useState(false)
  const [vehiculos, setVehicles] = useState<API_RESPONSE>(DEFAULT_RESPONSE)
  const getVehicles = async () => {
    setLoading(true)
    return globalThis.fetch(`${API_URL_PROD}/vehiculos`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then((response) => {
        setLoading(false)
        console.log(response)
        if (Array.isArray(response)) {
          setVehicles({
            code: API_CODES.ok,
            data: response,
            message: ''
          })
          return {

          }
        }
        setVehicles({
          code: API_CODES.dataEmpty,
          data: [],
          message: ''
        })
        return {

        }
      })
      .catch((err: Error) => {
        setVehicles({
          code: API_CODES.error,
          data: [],
          message: err.message
        })
        return {

        }
      })
  }

  return {
    vehiculos,
    getVehicles,
    loading
  }
}
