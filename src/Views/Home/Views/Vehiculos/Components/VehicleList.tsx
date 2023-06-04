import { useCallback, useState } from 'react'
import { FlatList, TextInput, View, RefreshControl } from 'react-native'
import { Vehiculo } from '../../../../../../types.global'
import { palette } from '../../../../../Config/theme'
import DropdownButton from '../../../../../Components/PickerComponent'
import { VehicleItem } from '../../../../../Components/ItemVehiculo'

export const VehicleList = ({ data, loading = false, onRefresh }: {data:Vehiculo[], loading:boolean, onRefresh(): Promise<any>}) => {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Vehiculo}) => (
    <VehicleItem {...item} />
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
        placeholder='Buscar Vehiculo por placa'
      />
      <FlatList
        data={query.length ? data.filter(c => c.placa.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}

      />
    </>
  )
}
