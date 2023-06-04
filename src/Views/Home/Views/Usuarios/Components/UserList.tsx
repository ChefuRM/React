import { useCallback, useState } from 'react'
import { FlatList, TextInput, View, RefreshControl } from 'react-native'
import { Usuario } from '../../../../../../types.global'
import { palette } from '../../../../../Config/theme'
import DropdownButton from '../../../../../Components/PickerComponent'
import { UserItem } from '../../../../../Components/ItemUsuario'

export const UserList = ({ data, loading = false, onRefresh }: {data:Usuario[], loading:boolean, onRefresh(): Promise<any>}) => {
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
        data={query.length ? data.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}

      />
    </>
  )
}
