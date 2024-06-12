import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './src/screens/LoginScreen'
import RegistryScreen from './src/screens/RegistryScreen'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const LoginStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Registry" component={RegistryScreen} />
  </Stack.Navigator>
);

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>

          <Tab.Screen name="Login" component={LoginStack} />

        </Tab.Navigator>
      </NavigationContainer>

    </>
  )
}

const screenOptions = ({ route }) => ({

  headerShown: false,

  tabBarIcon: ({ focused, color, size }) => {
    switch (route.name) {
      case 'Login': return <Entypo name={"home"} size={size} color={color} />
      default: return <FontAwesome5 name={'notfound'} size={size} color={color} />
    }
  },

  tabBarActiveTintColor: 'green', //globalStyles.colors.primary

  tabBarInactiveTintColor: 'red', //globalStyles.colors.secondary

  tabBarStyle: { paddingVertical: 8, backgroundColor: 'white' },

  tabBarLabelStyle: { paddingBottom: 2 },

});
