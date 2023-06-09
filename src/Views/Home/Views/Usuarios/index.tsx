import { useState } from 'react'
import { useSelector } from 'react-redux'
import { API_URL_PROD } from '../../../../Config/API'
import { UserList } from './Components/UserList'
import { ReduxStore } from '../../../../Storage/Store'
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native'
import { UserForm } from './Components/UsersForm'
import { useGetUsers } from '../../../../Services/useGetUsers'
import { palette } from '../../../../Config/theme'

const URL_ADD = `${API_URL_PROD}/users/add`

export default function Usuarios () {
  const [toggleModal, setToggleModal] = useState(false)
  const { getUsers } = useGetUsers()
  const { Usuarios } = useSelector((state:ReduxStore) => state.configDB)

  const handleToggleModal = () => {
    setToggleModal(true)
  }

  const handleSubmit = async (values: any) => {
    console.log('VALORES ENVIADOS', values)
    return globalThis.fetch(URL_ADD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        if (response.status === 201) {
          setToggleModal(false)
          getUsers()
          Alert.alert('Exito', 'Usuario Creado')
          return null
        }
        Alert.alert('Error', 'Algo salio mal')
        return null
      })
      .catch(err => {
        Alert.alert('Error', `Algo salio mal: ${err.message}`)
      })
  }

  const closeModal = () => {
    setToggleModal(false)
  }

  return (
    <View>
      <UserList
        data={Usuarios || []}
        loading={!Usuarios}
        onRefresh={getUsers}
      />
      <Modal
        visible={toggleModal}
      >
        <UserForm
          closeModal={closeModal}
          handleValues={handleSubmit}
        />
      </Modal>

      <TouchableOpacity onPress={handleToggleModal}>
        <Text style={{
          backgroundColor: palette.complementary1,
          padding: 10,
          borderRadius: 13,
          margin: 10,
          textAlign: 'center',
          color: 'white'
        }}
        >Agregar un Usuario
        </Text>
      </TouchableOpacity>
    </View>
  )
}
