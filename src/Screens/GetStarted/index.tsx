import type {FC} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import IMAGES from '../../Assets/Constants/Images';
import TEXT from '../../Assets/Constants/Text';
import {verticalScale, horizontalScale, fontScale} from '../../Utils/ScaleSize';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import SCREENS from '../../Assets/Constants/Screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
      <Pressable onPress={() => navigation.navigate(SCREENS.SignUp)}>
        <LinearGradient
          style={styles.button}
          colors={['#F93DAB', '#A03FE3', '#29F1E5']}
          angle={170}
          useAngle={true}>
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  imageContainer: {
    width: '100%',
    height: '78%',
    alignItems: 'center',
  },
  peopleImage: {
    width: horizontalScale(420),
    height: verticalScale(514),
  },
  linearImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    opacity: 0.8,
  },
  shadowOverlay: {
    position: 'absolute',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    width: '100%',
    borderRadius: 25,
    height: verticalScale(200),
    bottom: verticalScale(50),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: verticalScale(500),
  },
  searchImage: {
    width: horizontalScale(60),
    height: verticalScale(60),
  },
  whereText: {
    color: 'white',
    fontSize: fontScale(25),
    fontWeight: 'bold',
    marginRight: horizontalScale(20),
  },
  textContainer: {
    alignItems: 'center',
    width: '85%',
    bottom: verticalScale(70),
  },
  heading: {
    color: 'white',
    fontSize: fontScale(32),
    lineHeight: 35,
    fontFamily: 'Urbanist-SemiBold',
    textAlign: 'center',
  },
  subText: {
    color: 'white',
    fontSize: fontScale(17),
    marginTop: verticalScale(30),
    fontFamily: 'Urbanist-Thin',
    textAlign: 'center',
  },
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

export default GetStarted;
