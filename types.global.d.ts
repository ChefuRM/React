import type{ NativeStackScreenProps } from '@react-navigation/native-stack'

export type AppNavigationType = {
    Home: undefined
    Login: undefined

}

export type LoginScreenType = NativeStackScreenProps<AppNavigationType, 'Login'>
export type HomeScreenType = NativeStackScreenProps<AppNavigationType, 'Home'>
