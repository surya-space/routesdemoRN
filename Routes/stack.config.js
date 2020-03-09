import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../Screens/screen1'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'


const Stack = createStackNavigator();

const StackContainer = () => {
 return   <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Screen1" component={Screen1} />
                <Stack.Screen name="Screen2" component={Screen2} />
                <Stack.Screen name="Screen3" component={Screen3} />
          </Stack.Navigator>
}

export default StackContainer