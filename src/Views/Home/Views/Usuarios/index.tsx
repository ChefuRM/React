import { useCallback, useState } from 'react'
import { UserItem } from '../../../../Components/ItemUsuario'
import { usuarios } from '../../../../Config/ejemplos'
import { FlatList, TextInput } from 'react-native'
import { Usuario } from '../../../../../types.global'
import { palette } from '../../../../Config/theme'
export default function Usuarios () {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Usuario}) => (
    <UserItem {...item} />
  ), [])

  return (
    <>
      <TextInput
        value={query}
        onChangeText={setQuery}
        style={{
          backgroundColor: palette.complementary1,
          padding: 10,
          borderRadius: 13,
          margin: 10
        }}
        placeholder='Buscar Usuario por Nombre'
      />
      <FlatList
        data={query.length ? usuarios.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : usuarios}
        renderItem={renderItem}
      />
    </>
  )
}
