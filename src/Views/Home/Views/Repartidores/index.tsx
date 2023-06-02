import { useState } from 'react'
import { useSelector } from 'react-redux'
import { API_URL_PROD } from '../../../../Config/API'
import { DeliveryList } from './Components/DeliverysList'
import { ReduxStore } from '../../../../Storage/Store'
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native'
import { DeliverysForm } from './Components/DeliverysForm'
import { useGetDeliverys } from '../../../../Services/useGetDeliverys'
import { palette } from '../../../../Config/theme'

const URL_ADD = `${API_URL_PROD}/repartidores/add`

export default function Repartidores () {
  const [toggleModal, setToggleModal] = useState(false)
  const { getDeliverys } = useGetDeliverys()
  const { Repartidores } = useSelector((state: ReduxStore) => state.configDB)

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
          getDeliverys()
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
      <DeliveryList
        data={Repartidores || []}
        loading={!Repartidores}
        onRefresh={getDeliverys}
      />
      <Modal
        visible={toggleModal}
      >
        <DeliverysForm
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
        >Agregar un Repartidor
        </Text>
      </TouchableOpacity>
    </View>
  )
}
