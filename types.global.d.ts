import type{ NativeStackScreenProps } from '@react-navigation/native-stack'

export type AppNavigationType = {
    Home: undefined
    Login: undefined

}

export interface Cliente {
    nombre: string
    apellido: string
    telefono: string
    direccion: string
    cui: number
}

export interface Usuario {
    nombre: string,
    apellido: string,
    password: string,
    id: number
}

export interface Vehiculo {
    year: string,
    modelo: string,
    marca: string,
    color: string,
    placa: string
}

export interface Repartidor {
    nombre: string,
    apellido: string,
    licencia: string,
    telefono: string,
    cui: string
}

export interface Stock {
    correlativo: number,
    fechaDeIngreso: string
}

export interface BD {
    Clientes: Array<Cliente>
    Usuarios: Array<Usuario>
    Vehiculos: Array<Vehiculo>
    Repartidores: Array<Repartidor>
    Stock: Array<Stock>
    Auth: boolean
}

export type LoginScreenType = NativeStackScreenProps<AppNavigationType, 'Login'>
export type HomeScreenType = NativeStackScreenProps<AppNavigationType, 'Home'>
