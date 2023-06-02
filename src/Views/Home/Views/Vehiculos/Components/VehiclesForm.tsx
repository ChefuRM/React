import { TouchableOpacity, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { fonts, palette } from '../../../../../Config/theme'
import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface Props{
    handleValues(values: any):void
    closeModal():void
}

const validator = yup.object().shape({
  year: yup.string().required('Ingrese un año'),
  modelo: yup.string().required('Ingrese un modelo'),
  marca: yup.string().required('Ingrese una marca'),
  color: yup.string().required('Ingrese un color'),
  placa: yup.string().required('Ingrese una placa')

})

export const VehicleForm: FC<Props> = ({ handleValues, closeModal }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      year: '',
      modelo: '',
      marca: '',
      color: '',
      placa: ''
    },
    reValidateMode: 'onChange',
    resolver: yupResolver(validator)
  })

  return (
    <ScrollView
      style={{
        backgroundColor: palette.primary
      }}
    >

      <Text style={{ fontSize: fonts.Big, textAlign: 'center' }}> Agregar Cliente</Text>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='AÑO'
              returnKeyType='done'
              keyboardType='numeric'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='year'
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
              placeholder='MODELO'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='modelo'

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
              placeholder='MARCA'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='marca'
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
              placeholder='COLOR'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='color'
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
              placeholder='PLACA'
              returnKeyType='done'
            />
            <Text style={styles.input}>{error?.message}</Text>
          </>
        )}
        name='placa'
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
  }
})
