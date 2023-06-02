import { useState } from 'react'
import { API_URL_PROD } from '../Config/API'
import { addRepartidores } from '../Storage/Reduce'
import { useDispatch } from 'react-redux'

export const useGetDeliverys = () => {
  const SaveData = useDispatch()
  const [loading, setLoading] = useState(false)
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
          SaveData(addRepartidores(response))
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
    getDeliverys,
    loading
  }
}
