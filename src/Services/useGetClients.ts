import { useState } from 'react'
import { API_URL_PROD } from '../Config/API'
import { addClients } from '../Storage/Reduce'
import { useDispatch } from 'react-redux'

export const useGetClients = () => {
  const SaveData = useDispatch()
  const [loading, setLoading] = useState(false)
  // const [clients, setClients] = useState<API_RESPONSE>(DEFAULT_RESPONSE)
  const getClients = async () => {
    setLoading(true)
    return globalThis.fetch(`${API_URL_PROD}/clients`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then((response) => {
        setLoading(false)
        console.log(response)
        if (Array.isArray(response)) {
          SaveData(addClients(response))
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
    getClients,
    loading
  }
}
