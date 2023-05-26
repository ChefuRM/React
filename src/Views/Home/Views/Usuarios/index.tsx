import { useEffect } from 'react'
import { useGetUsers } from '../../../../Services/useGetUsers'
import { UserList } from './Components/UserList'

export default function Usuarios () {
  const { getUsers, users, loading = false } = useGetUsers()
  useEffect(() => {
    if (users.data.length === 0) {
      getUsers()
    }
  }, [])
  return (
    <>
      <UserList
        data={users.data}
        loading={loading}
        onRefresh={getUsers}
      />
    </>
  )
}
