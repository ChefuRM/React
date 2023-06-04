import { useCallback, useState } from 'react'
import { FlatList, TextInput, View, RefreshControl } from 'react-native'
import { Repartidor } from '../../../../../../types.global'
import { palette } from '../../../../../Config/theme'
import DropdownButton from '../../../../../Components/PickerComponent'
import { DeliveryItem } from '../../../../../Components/ItemRepartidor'

export const DeliveryList = ({ data, loading = false, onRefresh }: {data:Repartidor[], loading:boolean, onRefresh(): Promise<any>}) => {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Repartidor}) => (
    <DeliveryItem {...item} />
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
        placeholder='Buscar Repartidor por Nombre'
      />
      <FlatList
        data={query.length ? data.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}

      />
    </>
  )
}
