import { TouchableOpacity, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { fonts, palette } from '../../../../../Config/theme'
import { FC, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useGetClients } from '../../../../../Services/useGetClients'

interface Props{
    handleValues(values: any):void
    closeModal():void
}
const validator = yup.object().shape({
  numeroPedido: yup.string().required('Ingrese un numero de pedido'),
  departamentoOrigen: yup.string().required('Ingrese un Departamento'),
  departamentoDestino: yup.string().required('Ingrese un Departamento'),
  fechaInicio: yup.string().required('Ingrese Fecha'),
  cliente: yup.string().required('Ingrese un Cliente'),
  repartidor: yup.string().required('Ingrese un Repartidor'),
  vehiculo: yup.string().required('Ingrese un Vehiculo'),
  numeroDeCajas: yup.string().required('Ingrese un numero'),
  estado: yup.string().required('Ingrese un estado')
})

export const PedidosForm: FC<Props> = ({ handleValues, closeModal }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      numeroPedido: '',
      departamentoOrigen: '',
      departamentoDestino: '',
      fechaInicio: '',
      cliente: '',
      repartidor: '',
      vehiculo: '',
      numeroDeCajas: '',
      estado: ''
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validator)
  })

  const { getClients, loading } = useGetClients()
  const [clienteList, setClienteList] = useState([])
  const [selectedCliente, setSelectedCliente] = useState('')

  useEffect(() => {
    getClients()
  }, [])

  const onSubmit = (data:any) => {
    const values = {
      ...data,
      cliente: selectedCliente
    }
    handleValues(values)
  }

  return (
    <ScrollView
      style={{
        backgroundColor: palette.primary
      }}
    >

      <Text style={{ fontSize: fonts.Big, textAlign: 'center' }}> Agregar Pedido</Text>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='No.Pedido'
              returnKeyType='done'
              keyboardType='numeric'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='numeroPedido'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Departamento de Origen'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='departamentoOrigen'

      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Departamento de Destino'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='departamentoDestino'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Fecha de Envio'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='fechaInicio'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <ScrollView style={styles.clienteList}>
              {clienteList.map((cliente) => (
                <TouchableOpacity
                  key={cliente}
                  onPress={() => setSelectedCliente(cliente)}
                  style={styles.clienteItem}
                >
                  <Text>{cliente}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='cliente'
      />

      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Repartidor'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='repartidor'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Vehiculo'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='vehiculo'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Numero de Cajas'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='numeroDeCajas'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='Estado del Pedido'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='estado'
      />
      <TouchableOpacity
        style={styles.closeButton}
        onPress={closeModal}
      >
        <Text>CANCELAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleSubmit(handleValues)}
      >
        <Text>AGREGAR</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: palette.complementary1,
    margin: 10,
    padding: 10
  },
  closeButton: {
    backgroundColor: palette.complementary1,
    margin: 10,
    padding: 10
  },
  input: {
    backgroundColor: palette.auxiliary,
    color: palette.white
  },
  error: {
    color: palette.error,
    fontSize: fonts.Small
  },
  clienteList: {
    maxHeight: 100,
    backgroundColor: palette.auxiliary,
    marginVertical: 10,
    padding: 10
  },
  clienteItem: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: palette.primary,
    borderRadius: 5
  }

})
