import type {FC} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import IMAGES from '../../Assets/Constants/Images';
import TEXT from '../../Assets/Constants/Text';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../Assets/Constants/Screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearButton from '../../Components/Buttons/LinearButton';
import styles from './styles';

type RootStackParamList = {
  SignUp: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const GetStarted: FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <View style={styles.imageContainer}>
        <Image source={IMAGES.people} style={styles.peopleImage} />
        <Image source={IMAGES.linear} style={styles.linearImage} />
      </View>

      <View style={styles.searchContainer}>
        <Image source={IMAGES.search} style={styles.searchImage} />
        <Text style={styles.whereText}>{TEXT.Where}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{TEXT.Find}</Text>
        <Text style={styles.subText}>{TEXT.Connect}</Text>
      </View>
      <View>
        <LinearButton
          name={TEXT.Started}
          onPress={() => navigation.navigate(SCREENS.SignUp)}
          angle={170}
          useAngle={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
