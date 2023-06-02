import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer'
import { palette } from '../../Config/theme'
import Icon from 'react-native-vector-icons/Ionicons'

export default function DrawerComponent ({
  navigation,
  state
}:DrawerContentComponentProps) {
  const handlePress = (screen: string) => {
    navigation.navigate(screen)
  }

  return (
    <>
      <DrawerContentScrollView
        style={{ backgroundColor: palette.secondary }}
      >
        <DrawerItem
          label='Usuarios'
          onPress={() => handlePress('Usuarios')}
          style={{ borderRadius: 80, padding: 5, backgroundColor: state.index === 1 ? palette.primary : palette.secondary }}
          labelStyle={{ color: palette.complementary1 }}
          icon={({ color, focused, size }) => (<Icon name='body-sharp' size={size} color={color} />)}
        />
        <DrawerItem
          label='Clientes'
          onPress={() => handlePress('Clientes')}
          style={{ borderRadius: 80, padding: 5, backgroundColor: state.index === 2 ? palette.primary : palette.secondary }}
          icon={({ color, focused, size }) => (<Icon name='people-outline' size={size} color={color} />)}
        />
        <DrawerItem
          label='Repartidores'
          onPress={() => handlePress('Repartidores')}
          style={{ borderRadius: 80, padding: 5, backgroundColor: state.index === 3 ? palette.primary : palette.secondary }}
          icon={({ color, focused, size }) => (<Icon name='walk-outline' size={size} color={color} />)}
        />
        <DrawerItem
          label='Pedidos'
          onPress={() => handlePress('Pedidos')}
          style={{ borderRadius: 80, padding: 5, backgroundColor: state.index === 4 ? palette.primary : palette.secondary }}
          icon={({ color, focused, size }) => (<Icon name='ios-archive-outline' size={size} color={color} />)}

        />
        <DrawerItem
          label='Vehiculos'
          onPress={() => handlePress('Vehiculos')}
          style={{ borderRadius: 80, padding: 5, backgroundColor: state.index === 5 ? palette.primary : palette.secondary }}
          icon={({ color, focused, size }) => (<Icon name='md-car-outline' size={size} color={color} />)}

        />
        <DrawerItem
          label='Reportes'
          onPress={() => handlePress('Reportes')}
          style={{ borderRadius: 80, padding: 5, backgroundColor: state.index === 6 ? palette.primary : palette.secondary }}
          icon={({ color, focused, size }) => (<Icon name='md-clipboard-outline' size={size} color={color} />)}

        />
        <DrawerItem
          label='Cerrar Sesion'
          onPress={() => {}}
          style={{ borderRadius: 80, padding: 5, backgroundColor: palette.secondary }}
          icon={({ color, focused, size }) => (<Icon name='ios-exit-outline' size={size} color={color} />)}

        />
      </DrawerContentScrollView>

    </>
  )
}
