import { useEffect, useState } from 'react'
import { Usuario } from '../../types.global'
import { API_CODES, API_URL_PROD } from '../Config/API'
import { string } from 'yup'
import { set } from 'react-hook-form'

interface API_RESPONSE{
    code: number,
    data: Usuario[],
    message: string
}
const DEFAULT_RESPONSE = {
  code: API_CODES.dataEmpty,
  data: [],
  message: ''
}

export const useGetUsers = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState<API_RESPONSE>(DEFAULT_RESPONSE)
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
          setUsers({
            code: API_CODES.ok,
            data: response,
            message: ''
          })
          return {

          }
        }
        setUsers({
          code: API_CODES.dataEmpty,
          data: [],
          message: ''
        })
        return {

        }
      })
      .catch((err: Error) => {
        setUsers({
          code: API_CODES.error,
          data: [],
          message: err.message
        })
        return {

        }
      })
  }

  return {
    users,
    getUsers,
    loading
  }
}
