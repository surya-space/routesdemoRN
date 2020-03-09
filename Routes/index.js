import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import StackContainer from './stack.config'
import TabNavigator from './tab.config'
import DrawerContainer from './drawer.config'

const  AppContainer = () => {
    return   <NavigationContainer>
                 <DrawerContainer/>
             </NavigationContainer>
}

export default AppContainer