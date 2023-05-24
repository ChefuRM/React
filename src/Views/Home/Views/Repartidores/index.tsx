import { useCallback, useState } from 'react'
import { DeliveryItem } from '../../../../Components/ItemRepartidor'
import { repartidores } from '../../../../Config/ejemplos'
import { FlatList, TextInput } from 'react-native'
import { Repartidor } from '../../../../../types.global'
import { palette } from '../../../../Config/theme'
export default function Repartidores () {
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
        data={query.length ? repartidores.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : repartidores}
        renderItem={renderItem}
      />
    </>
  )
}
