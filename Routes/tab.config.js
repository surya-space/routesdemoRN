import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Screens/screen1'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'
const Tab = createBottomTabNavigator();

const TabContainer = () => {
    return    <Tab.Navigator>
                    <Tab.Screen name="Screen1" component={Screen1} />
                    <Tab.Screen name="Screen2" component={Screen2} />
                    <Tab.Screen name="Screen3" component={Screen3} />
             </Tab.Navigator>
}

export default TabContainer;