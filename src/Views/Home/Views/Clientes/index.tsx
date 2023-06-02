import { useState } from 'react'
import { useSelector } from 'react-redux'
import { API_URL_PROD } from '../../../../Config/API'
import { ClientList } from './Components/ClientList'
import { ReduxStore } from '../../../../Storage/Store'
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native'
import { ClientForm } from './Components/ClientsForm'
import { useGetClients } from '../../../../Services/useGetClients'

const URL_ADD = `${API_URL_PROD}/clients/add`

export default function Clientes () {
  const [toggleModal, setToggleModal] = useState(false)
  const { getClients } = useGetClients()
  const { Clientes } = useSelector((state: ReduxStore) => state.configDB)

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
          getClients()
          Alert.alert('Exito', 'Cliente Creado')
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
      <ClientList
        data={Clientes || []}
        loading={!Clientes}
        onRefresh={getClients}
      />
      <Modal
        visible={toggleModal}
      >
        <ClientForm
          closeModal={closeModal}
          handleValues={handleSubmit}
        />
      </Modal>

      <TouchableOpacity onPress={handleToggleModal}>
        <Text>Agregar un Cliente</Text>
      </TouchableOpacity>
    </View>
  )
}
