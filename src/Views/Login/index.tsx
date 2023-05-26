import { Text, TouchableOpacity, StyleSheet, TextInput, View } from 'react-native'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginScreenType } from '../../../types.global'
import { fonts, palette } from '../../Config/theme'
import { loginForm } from '../Login/types.login'
import { Controller, useForm } from 'react-hook-form'
import { useCallback } from 'react'
import loginFormSchema from '../../Schemas/loginForm'

export default function Login ({ navigation, route }:LoginScreenType) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: 'Eduardo',
      password: '1234'
    },
    reValidateMode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(loginFormSchema)
  })
  const handleLogin = useCallback((form: loginForm) => {
    const { password, username } = form
    console.log(username, password)
    if (username === 'Eduardo' && password === '1234') {
      navigation.replace('Home')
    }
  }, [navigation])
  return (
    <View style={{ flex: 1, padding: 15, justifyContent: 'center' }}>
      <Text style={{ color: 'white' }}>
        Inicio de Sesión
      </Text>
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={{
                color: palette.white,
                borderRadius: 13,
                backgroundColor: palette.complementary1,
                marginVertical: 15
              }}
              placeholder='USERNAME'
            />
            <Text style={{ color: palette.error, fontSize: fonts.Tiny }}>(error?.mesagge)</Text>
          </>
        )}
        name='username'
      />
      <Controller
        control={control}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <Text />
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={{
                color: palette.white,
                borderRadius: 13,
                backgroundColor: palette.complementary1,
                marginVertical: 15
              }}
              placeholder='Contraseña'
            />
            <Text style={{ color: palette.error, fontSize: fonts.Tiny }}>(error?.mesagge)</Text>
          </>
        )}
        name='password'
      />

      <TouchableOpacity style={[styles.button]} onPress={handleSubmit(handleLogin)}>
        <Text style={[styles.buttonText]}>
          Iniciar Sesión
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.complementary1,
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  buttonText: {
    color: palette.white,
    textAlign: 'center',
    fontSize: fonts.Big
  }
})
