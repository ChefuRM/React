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
  id: yup
    .number()
    .typeError('INGRESE UN ID VALIDO')
    .required('INGRESE UN ID VALIDO'),
  nombre: yup.string().required('Ingrese un nombre'),
  apellido: yup.string().required('Ingrese un apellido'),
  password: yup.string().required('Ingrese una contraseña')

})

export const UserForm: FC<Props> = ({ handleValues, closeModal }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      id: '',
      nombre: '',
      apellido: '',
      password: ''
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

      <Text style={{ fontSize: fonts.Big, textAlign: 'center' }}> Agregar Usuario</Text>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholder='ID'
              returnKeyType='done'
              keyboardType='numeric'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='id'
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
              placeholder='Nombre'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='nombre'

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
              placeholder='Apellido'
              returnKeyType='done'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='apellido'
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
              placeholder='PASSWORD'
              returnKeyType='done'
              keyboardType='phone-pad'
            />
            <Text style={styles.error}>{error?.message}</Text>
          </>
        )}
        name='password'
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
