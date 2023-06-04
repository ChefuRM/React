import { useCallback, useState } from 'react'
import { PedidoItem } from '../../../../../Components/ItemPedido'
import { FlatList, TextInput, RefreshControl } from 'react-native'
import { Pedido } from '../../../../../../types.global'
import { palette } from '../../../../../Config/theme'

export const PedidoList = ({ data, loading = false, onRefresh }: {data:Pedido[], loading:boolean, onRefresh(): Promise<any>}) => {
  const [query, setQuery] = useState('')
  const renderItemP = useCallback(({ item }: {item: Pedido}) => (
    <PedidoItem {...item} />
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
        placeholder='Buscar pedido por Cliente'
      />
      <FlatList
        data={query.length ? data.filter(c => c.cliente.toLowerCase().includes(query.toLowerCase())) : data}
        renderItem={renderItemP}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}

      />
    </>
  )
}
