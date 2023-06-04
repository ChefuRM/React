import { FC } from 'react'
import { Pedido } from '../../../types.global'
import { View, Text, StyleSheet } from 'react-native'
import { palette } from '../../Config/theme'

export const PedidoItem: FC<Pedido> = ({ numeroPedido, departamentoOrigen, departamentoDestino, fechaInicio, cliente, repartidor, vehiculo, cajasProducto, numeroCajas, estado }) => {
  return (
    <View style={styles.container}>
      <Text>No.pedido: {numeroPedido}</Text>
      <Text>Origen:{departamentoOrigen} Destino{departamentoDestino}</Text>
      <Text>Fecha de Solicitud: {fechaInicio}</Text>
      <Text>Cliente: {cliente}</Text>
      <Text>Repartidor asignado: {repartidor}</Text>
      <Text>Vehiculo: {vehiculo}</Text>
      <Text>Cantidad de Cajas: {numeroCajas}</Text>
      <Text>Cajas: {cajasProducto}</Text>
      <Text>Estado:{estado}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.secondary,
    padding: 10,
    borderRadius: 13,
    marginHorizontal: 10,
    marginVertical: 3
  }
})
