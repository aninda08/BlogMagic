import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreens from './src/screens/IndexScreens';
import ShowScreens from './src/screens/ShowScreens';
import CreateScreen from './src/screens/CreateScreen';
import EditScreens from './src/screens/EditScreens';
import { Provider } from './src/context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: 'Bloggers Magic' }}>
        <Stack.Screen
          name="Index"
          component={IndexScreens}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Show" component={ShowScreens} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
