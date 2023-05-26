import { useState } from 'react'
import { Repartidor } from '../../types.global'
import { API_CODES, API_URL_PROD } from '../Config/API'

interface API_RESPONSE{
    code: number,
    data: Repartidor[],
    message: string
}
const DEFAULT_RESPONSE = {
  code: API_CODES.dataEmpty,
  data: [],
  message: ''
}

export const useGetDeliverys = () => {
  const [loading, setLoading] = useState(false)
  const [deliverys, setDeliverys] = useState<API_RESPONSE>(DEFAULT_RESPONSE)
  const getDeliverys = async () => {
    setLoading(true)
    return globalThis.fetch(`${API_URL_PROD}/repartidores`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then((response) => {
        setLoading(false)
        console.log(response)
        if (Array.isArray(response)) {
          setDeliverys({
            code: API_CODES.ok,
            data: response,
            message: ''
          })
          return {

          }
        }
        setDeliverys({
          code: API_CODES.dataEmpty,
          data: [],
          message: ''
        })
        return {

        }
      })
      .catch((err: Error) => {
        setDeliverys({
          code: API_CODES.error,
          data: [],
          message: err.message
        })
        return {

        }
      })
  }

  return {
    deliverys,
    getDeliverys,
    loading
  }
}
