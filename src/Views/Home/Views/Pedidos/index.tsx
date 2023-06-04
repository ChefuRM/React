import { useState } from 'react'
import { useSelector } from 'react-redux'
import { API_URL_PROD } from '../../../../Config/API'
import { PedidoList } from './Components/PedidoList'
import { ReduxStore } from '../../../../Storage/Store'
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native'
import { PedidosForm } from './Components/PedidosForm'
import { useGetPedidos } from '../../../../Services/useGetPedidos'
import { palette } from '../../../../Config/theme'

const URL_ADD = `${API_URL_PROD}/pedidos/add`

export default function Pedidos () {
  const [toggleModal, setToggleModal] = useState(false)
  const { getPedidos } = useGetPedidos()
  const { Pedidos } = useSelector((state: ReduxStore) => state.configDB)

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
          getPedidos()
          Alert.alert('Exito', 'Pedido Creado')
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
      <PedidoList
        data={Pedidos || []}
        loading={!Pedidos}
        onRefresh={getPedidos}
      />
      <Modal
        visible={toggleModal}
      >
        <PedidosForm
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
        >Agregar un Pedido
        </Text>
      </TouchableOpacity>
    </View>
  )
}
