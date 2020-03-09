import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen1 from '../Screens/screen1'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'

import TabContainer from './tab.config'

const Drawer = createDrawerNavigator();

const DrawerContainer = () => {
    return  <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={TabContainer} />
            </Drawer.Navigator>
}

export default DrawerContainer