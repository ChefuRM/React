import { useState } from 'react'
import { API_URL_PROD } from '../Config/API'
import { addVehicles } from '../Storage/Reduce'
import { useDispatch } from 'react-redux'

export const useGetVehicles = () => {
  const SaveData = useDispatch()
  const [loading, setLoading] = useState(false)
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
          SaveData(addVehicles(response))
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
    getVehicles,
    loading
  }
}
