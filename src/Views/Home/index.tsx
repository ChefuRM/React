import { Text, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreens } from './types.home'
import { HomeScreenType } from '../../../types.global'
import Usuarios from './Views/Usuarios'
import Reportes from './Views/Reportes'
import { ScreenContainer } from 'react-native-screens'
import { palette } from '../../Config/theme'
import Clientes from './Views/Clientes'
import Vehiculos from './Views/Vehiculos'
import Pedidos from './Views/Pedidos'
import Repartidores from './Views/Repartidores'
import DrawerComponent from '../../Components/DrawerComponent'

const { Navigator, Group, Screen } = createDrawerNavigator<HomeScreens>()

export default function Home ({ navigation, route }:HomeScreenType) {
  return (
    <>
      <Navigator
        drawerContent={DrawerComponent}
        screenOptions={{
          sceneContainerStyle: {
            backgroundColor: palette.primary
          },
          // headerTransparent: true,
          headerBackground: () => <View style={{ backgroundColor: palette.primary }} />
        }}
      >
        <Screen
          name='Usuarios'
          component={Usuarios}
        />
        <Screen
          name='Reportes'
          component={Reportes}
        />
        <Screen
          name='Clientes'
          component={Clientes}
        />
        <Screen
          name='Vehiculos'
          component={Vehiculos}
        />
        <Screen
          name='Pedidos'
          component={Pedidos}
        />
        <Screen
          name='Repartidores'
          component={Repartidores}
        />
      </Navigator>
    </>
  )
}
