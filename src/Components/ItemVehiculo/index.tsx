import { FC } from 'react'
import { Vehiculo } from '../../../types.global'
import { View, Text, StyleSheet } from 'react-native'
import { palette } from '../../Config/theme'
export const VehicleItem: FC<Vehiculo> = ({ year, modelo, marca, color, placa }) => {
  return (
    <View style={styles.container}>
      <Text>{marca} {placa}</Text>
      <Text>Año: {year}</Text>
      <Text>Modelo: {modelo}</Text>
      <Text>Color: {color}</Text>
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
