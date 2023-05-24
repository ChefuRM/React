import { FC } from 'react'
import { Repartidor } from '../../../types.global'
import { View, Text, StyleSheet } from 'react-native'
import { palette } from '../../Config/theme'
export const DeliveryItem: FC<Repartidor> = ({ apellido, cui, licencia, nombre, telefono }) => {
  return (
    <View style={styles.container}>
      <Text>{nombre} {apellido}</Text>
      <Text>Licencia: {licencia}</Text>
      <Text>Telefono: {telefono}</Text>
      <Text>CUI: {cui}</Text>
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
