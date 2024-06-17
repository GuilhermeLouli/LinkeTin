import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreens/HomeScreen';
import ProfileScreen from '../screens/HomeScreens/ProfileScreen';
import ChatsScreen from '../screens/HomeScreens/ChatsScreen';
import MatchesScreen from '../screens/HomeScreens/MatchesScreen';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default MainNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Matches" component={MatchesScreen} />
    <Stack.Screen name="Chat" component={ChatsScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const screenOptions = ({ route }) => ({

  headerShown: true,

  tabBarIcon: ({ focused, color, size }) => {
    switch (route.name) {
      case 'Home': return <Entypo name={"home"} size={size} color={color} />
      case 'Matches': return <Ionicons name={"grid"} size={size} color={color} />
      case 'Chat': return <Ionicons name={"chatbubbles"} size={size} color={color} />
      case 'Profile': return <FontAwesome5 name={"user-alt"} size={size} color={color} />
      default: return <FontAwesome5 name={'notfound'} size={size} color={color} />
    }
  },

  tabBarActiveTintColor: '#5FBBEE', //globalStyles.colors.primary

  tabBarInactiveTintColor: '#7D848F', //globalStyles.colors.secondary

  tabBarStyle: { paddingVertical: 8, backgroundColor: 'white' },

  tabBarLabelStyle: { paddingBottom: 2 },

});
