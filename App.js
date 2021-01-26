import 'react-native-gesture-handler';
import * as React from 'react';
import {Home} from '@step-pagamentos/step-mobile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function StepScreen() {
  return (
    <Home
      id={1}
      name={'John'}
      cellPhone={'61-123451234'}
      cpf={'529.577.490-56'}
      email={'J2onh@email.com'}
      birthDate={'1999-01-01'}
      tempToken={'correct_temp_token'}
    />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Investimentos" component={StepScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
