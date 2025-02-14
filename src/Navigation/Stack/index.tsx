import type {FC} from 'react';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREENS from '../../Assets/Constants/Screens';
import GetStarted from '../../Screens/GetStarted';
import SignUp from '../../Screens/SignUp';
import Verification from '../../Screens/Verification';

interface indexProps {}

const Stack: FC<indexProps> = ({}) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.GetStarted}
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREENS.SignUp}
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SCREENS.Verification}
        component={Verification}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Stack;
