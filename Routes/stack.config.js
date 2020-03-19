import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../Screens/screen1'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'
import { DrawerActions } from '@react-navigation/native';
import {Button} from 'react-native'


const Stack = createStackNavigator();

export const StackContainer1 = ({navigation}) => {
 return   <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1}    options={{
          title: 'Stack1',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Button
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              title="Info"
              color="#fff"
            />
          )
        }}/>
          </Stack.Navigator>
}

export const StackContainer2 = ({navigation}) => {
      return   <Stack.Navigator>
                     <Stack.Screen name="Screen2" component={Screen2}    options={{
               title: 'Stack2',
               headerStyle: {
                 backgroundColor: '#f4511e',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                 fontWeight: 'bold',
               },
               headerLeft: () => (
                <Button
                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                  title="Info"
                  color="#fff"
                />
              )
             }}/>
               </Stack.Navigator>
     }

     export const StackContainer3 = ({navigation}
      ) => {
      return   <Stack.Navigator>
                     <Stack.Screen name="Screen3" component={Screen3}    options={{
               title: 'Stack3',
               headerStyle: {
                 backgroundColor: '#f4511e',
               },
               headerTintColor: '#fff',
               headerTitleStyle: {
                 fontWeight: 'bold',
               },
               headerLeft: () => (
                <Button
                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                  title="Info"
                  color="#fff"
                />
              )
             }}/>
               </Stack.Navigator>
     }