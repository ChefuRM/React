/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/Views/Login'
import Home from './src/Views/Home'
import { palette } from './src/Config/theme'
import { AppNavigationType } from './types.global'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/Storage/Store'

const { Navigator, Screen } = createNativeStackNavigator<AppNavigationType>()
// eslint-disable-next-line no-undef
function App (): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={palette.primary} barStyle='light-content' />
        <NavigationContainer>
          <Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: palette.primary
              },
              animation: 'slide_from_bottom'
            }}
          >
            <Screen
              name='Login'
              component={Login}
              navigationKey='Login'
            />
            <Screen
              name='Home'
              component={Home}
              navigationKey='Home'
            />
          </Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
