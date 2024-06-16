import { createStackNavigator } from '@react-navigation/stack'
import { ChangePasswordScreen, LoginOrRegisterScreen, LoginScreen, TroubleSigningInScreen } from '../screens/LoginScreens';
import { CandidateEmailPasswordScreen, RecruiterEmailPasswordScreen, WhatAmIScreen } from '../screens/RegistrationScreens';

const Stack = createStackNavigator()

export const LoginNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginStack} />
    <Stack.Screen name="Registration" component={RegistrationStack} />
  </Stack.Navigator>
);

const LoginStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoginOrRegister" component={LoginOrRegisterScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
    <Stack.Screen name="TroubleSigningIn" component={TroubleSigningInScreen} />
  </Stack.Navigator>
);

const RegistrationStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="WhatAmI" component={WhatAmIScreen} />
    <Stack.Screen name="CandidateRegistration" component={CandidateRegistrationStack} />
    <Stack.Screen name="RecruiterRegistration" component={RecruiterRegistrationStack} />
  </Stack.Navigator>
)

const CandidateRegistrationStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="EmailPassword" component={CandidateEmailPasswordScreen} />
  </Stack.Navigator>
)

const RecruiterRegistrationStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="EmailPassword" component={RecruiterEmailPasswordScreen} />
  </Stack.Navigator>
)
