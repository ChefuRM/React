import { useEffect } from 'react'
import { DeliveryList } from './Components/DeliverysList'
import { useGetDeliverys } from '../../../../Services/useGetDeliverys'

export default function Repartidores () {
  const { getDeliverys, deliverys, loading = false } = useGetDeliverys()
  useEffect(() => {
    if (deliverys.data.length === 0) {
      getDeliverys()
    }
  }, [])
  return (
    <>
      <DeliveryList
        data={deliverys.data}
        loading={loading}
        onRefresh={getDeliverys}
      />
    </>
  )
}
