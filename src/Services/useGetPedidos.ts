import { useState } from 'react'
import { API_URL_PROD } from '../Config/API'
import { addPedidos } from '../Storage/Reduce'
import { useDispatch } from 'react-redux'

export const useGetPedidos = () => {
  const SaveData = useDispatch()
  const [loading, setLoading] = useState(false)
  const getPedidos = async () => {
    setLoading(true)
    return globalThis.fetch(`${API_URL_PROD}/pedidos`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then((response) => {
        setLoading(false)
        console.log(response)
        if (Array.isArray(response)) {
          SaveData(addPedidos(response))
          return {

          }
        }
        return {

        }
      })
      .catch(() => {
        return {

        }
      })
  }

  return {
    getPedidos,
    loading
  }
}
