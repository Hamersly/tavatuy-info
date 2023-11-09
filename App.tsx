import {HomeScreen} from "./pages/HomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from "./pages/SearchScreen";
import {SettingsScreen} from "./pages/SettingsScreen";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#207E62',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 26

          },
        }}
      >
        <Stack.Screen name="Главная" component={HomeScreen}/>
        <Stack.Screen name="Поиск" component={SearchScreen}/>
        <Stack.Screen name="Настроки" component={SettingsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


