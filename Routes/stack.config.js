import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../Screens/screen1'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'


const Stack = createStackNavigator();

export const StackContainer1 = () => {
 return   <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1}    options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          </Stack.Navigator>
}

export const StackContainer2 = () => {
      return   <Stack.Navigator>
                     <Stack.Screen name="Screen2" component={Screen2}    options={{
               title: 'My home',
               headerStyle: {
                 backgroundColor: '#f4511e',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                 fontWeight: 'bold',
               },
             }}/>
               </Stack.Navigator>
     }

     export const StackContainer3 = () => {
      return   <Stack.Navigator>
                     <Stack.Screen name="Screen3" component={Screen3}    options={{
               title: 'My home',
               headerStyle: {
                 backgroundColor: '#f4511e',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                 fontWeight: 'bold',
               },
             }}/>
               </Stack.Navigator>
     }