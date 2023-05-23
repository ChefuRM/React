import { useCallback, useState } from 'react'
import { ClientItem } from '../../../../Components/ItemCliente'
import { clientes } from '../../../../Config/ejemplos'
import { FlatList, TextInput } from 'react-native'
import { Cliente } from '../../../../../types.global'
import { palette } from '../../../../Config/theme'
export default function Clientes () {
  const [query, setQuery] = useState('')
  const renderItem = useCallback(({ item }: {item: Cliente}) => (
    <ClientItem {...item} />
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
        placeholder='Buscar Cliente por Nombre'
      />
      <FlatList
        data={query.length ? clientes.filter(c => c.nombre.toLowerCase().includes(query.toLowerCase())) : clientes}
        renderItem={renderItem}
      />
    </>
  )
}
