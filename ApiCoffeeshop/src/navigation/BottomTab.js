import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab({ logueado, setLogueado }) {

  const RenderHomeScreen = props => (
    <HomeScreen {...props} setLogueado={setLogueado} logueado={logueado} />
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={RenderHomeScreen}
        options={{
          title: 'Inicio',
          tabBarActiveTintColor: '#6200ee',
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}