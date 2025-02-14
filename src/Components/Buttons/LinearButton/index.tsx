import type {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  verticalScale,
  horizontalScale,
  fontScale,
} from '../../../Utils/ScaleSize';

import type {GestureResponderEvent} from 'react-native';

interface indexProps {
  // Define props here
  onPress: (event: GestureResponderEvent) => void;
  angle: number;
  useAngle: boolean;
  name: string;
}

const LinearButton: FC<indexProps> = ({onPress, angle, useAngle, name}) => {
  const colors = ['#F93DAB', '#A03FE3', '#29F1E5'];
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        style={styles.button}
        colors={colors}
        angle={angle}
        useAngle={useAngle}>
        <Text style={styles.buttonText}>{name}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: horizontalScale(310),
    height: verticalScale(55),
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(50),
  },
  buttonText: {
    color: 'white',
    fontSize: fontScale(18),
    fontFamily: 'Urbanist-SemiBold',
  },
});
export default LinearButton;
