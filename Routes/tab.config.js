import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Screens/screen1'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'
import {StackContainer1} from './stack.config'
import {StackContainer2} from './stack.config'
import {StackContainer3} from './stack.config'
const Tab = createBottomTabNavigator();

const TabContainer = () => {
    return    <Tab.Navigator>
                    <Tab.Screen name="Screen1" component={StackContainer1} />
                    <Tab.Screen name="Screen2" component={StackContainer2} />
                    <Tab.Screen name="Screen3" component={StackContainer3} />
             </Tab.Navigator>
}

export default TabContainer;