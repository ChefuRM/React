import { useCallback, useState } from 'react'
import { VehicleItem } from '../../../../Components/ItemVehiculo'
import { vehiculos } from '../../../../Config/ejemplos'
import { FlatList, TextInput } from 'react-native'
import { Vehiculo } from '../../../../../types.global'
import { palette } from '../../../../Config/theme'
export default function Vehiculos () {
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
        placeholder='Buscar Vehiculo por Placa'
      />
      <FlatList
        data={query.length ? vehiculos.filter(c => c.placa.toLowerCase().includes(query.toLowerCase())) : vehiculos}
        renderItem={renderItem}
      />
    </>
  )
}
