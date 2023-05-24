import { FC } from 'react'
import { Usuario } from '../../../types.global'
import { View, Text, StyleSheet } from 'react-native'
import { palette } from '../../Config/theme'
export const UserItem: FC<Usuario> = ({ nombre, apellido, password, id }) => {
  return (
    <View style={styles.container}>
      <Text>ID:{id}</Text>
      <Text>{nombre} {apellido}</Text>
      <Text>Contraseña: {password}</Text>
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
