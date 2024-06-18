
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import LoginNavigator from './src/routers/LoginNavigator'
import MainNavigator from './src/routers/MainNavigator'

export default function App() {

  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <>
      <NavigationContainer>
        {
          loggedIn
            ? <MainNavigator />
            : <MainNavigator />
        }
      </NavigationContainer>
    </>
  )
}
