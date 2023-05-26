import { useEffect } from 'react'
import { useGetVehicles } from '../../../../Services/useGetVehicles'
import { VehicleList } from './Components/VehicleList'

export default function Vehiculos () {
  const { getVehicles, vehiculos, loading = false } = useGetVehicles()
  useEffect(() => {
    if (vehiculos.data.length === 0) {
      getVehicles()
    }
  }, [])
  return (
    <>
      <VehicleList
        data={vehiculos.data}
        loading={loading}
        onRefresh={getVehicles}
      />
    </>
  )
}
