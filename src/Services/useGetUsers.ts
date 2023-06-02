import { useState } from 'react'
import { API_URL_PROD } from '../Config/API'
import { addUsers } from '../Storage/Reduce'
import { useDispatch } from 'react-redux'

export const useGetUsers = () => {
  const SaveData = useDispatch()
  const [loading, setLoading] = useState(false)
  const getUsers = async () => {
    setLoading(true)
    return globalThis.fetch(`${API_URL_PROD}/users`,
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then((response) => {
        setLoading(false)
        console.log(response)
        if (Array.isArray(response)) {
          SaveData(addUsers(response))
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
    getUsers,
    loading
  }
}
