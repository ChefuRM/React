import { useState } from 'react'
import { useSelector } from 'react-redux'
import { API_URL_PROD } from '../../../../Config/API'
import { VehicleList } from './Components/VehicleList'
import { ReduxStore } from '../../../../Storage/Store'
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native'
import { VehicleForm } from './Components/VehiclesForm'
import { useGetVehicles } from '../../../../Services/useGetVehicles'
import { palette } from '../../../../Config/theme'

const URL_ADD = `${API_URL_PROD}/clients/add`

export default function Vehiculos () {
  const [toggleModal, setToggleModal] = useState(false)
  const { getVehicles } = useGetVehicles()
  const { Vehiculos } = useSelector((state: ReduxStore) => state.configDB)

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
          getVehicles()
          Alert.alert('Exito', 'Vehiculo Creado')
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
      <VehicleList
        data={Vehiculos || []}
        loading={!Vehiculos}
        onRefresh={getVehicles}
      />
      <Modal
        visible={toggleModal}
      >
        <VehicleForm
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
        >Agregar un Vehiculo
        </Text>
      </TouchableOpacity>
    </View>
  )
}
