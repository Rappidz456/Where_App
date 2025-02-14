import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Pressable,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
type RootStackParamList = {
  Verification: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Verification'
>;

const Login: React.FC = () => {
  const [gender, setGender] = React.useState<string | null>(null);
  const [phone, setPhone] = React.useState('');
  const [countryCode, setCountryCode] = React.useState<CountryCode>('US');
  const [isDatePickerVisible, setDatePickerVisible] = React.useState(false);
  const [date, setDate] = React.useState('');
  const handleConfirm = (selectedDate: Date) => {
    const date = selectedDate.toISOString().split('T')[0];
    setDate(date);
    setDatePickerVisible(false);
  };
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <LinearGradient
        colors={['#050507', '#07070b', '#120f1c', '#2c2145']}
        style={styles.container}
        angle={360}
        useAngle>
        <View style={{alignItems: 'center'}}>
          <View style={{width: 360, marginTop: verticalScale(80)}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Pressable onPress={() => navigation.goBack()}>
                <View style={styles.backArrowViewStyle}>
                  <Image source={IMAGES.arrow} />
                </View>
              </Pressable>
              <Text style={styles.welcomeTextStyle}>Sign Up</Text>
              <Pressable>
                <View style={styles.backArrowViewStyle}>
                  <Text>1/4</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: horizontalScale(380),
              gap: verticalScale(15),
              marginTop: verticalScale(30),
            }}>
            <View>
              <Text style={styles.placeHolderTextStyle}>Full Name</Text>
            </View>
            <View>
              <TextInput
                style={{
                  borderRadius: 10,
                  width: horizontalScale(375),
                  paddingLeft: horizontalScale(35),
                  color: 'white',
                  backgroundColor: '#828CA91A',
                  height: verticalScale(55),
                  fontSize: fontScale(18),
                  fontFamily: 'Urbanist-Medium',
                }}
                placeholder="Type your full name here"
                placeholderTextColor={'#555C73'}
              />
            </View>
            <View>
              <Text style={styles.placeHolderTextStyle}>Contact</Text>
            </View>
            <View style={styles.phoneContainer}>
              <Image source={IMAGES.drop} />
              <CountryPicker
                withFlag
                withCallingCode
                withFilter
                countryCode={countryCode}
                onSelect={country => {
                  setCountryCode(country.cca2);
                  setPhone(`+${country.callingCode[0]}`); // Set country code as input value
                }}
              />
              <TextInput
                style={styles.phoneInput}
                placeholder={phone || '+1'} // Display selected country code in placeholder
                placeholderTextColor="#777"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            <View>
              <Text style={styles.placeHolderTextStyle}>Birthday</Text>
            </View>
            <View>
              <TextInput
                style={styles.dateInput}
                placeholder="DD-MM-YY"
                placeholderTextColor="#777"
                editable={false}
                value={date}
              />
              <TouchableOpacity
                onPress={() => setDatePickerVisible(true)}
                style={styles.dateArrowIcon}>
                <Image source={IMAGES.down} />
              </TouchableOpacity>
              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={() => setDatePickerVisible(false)}
                display="spinner"
              />
            </View>
            <View>
              <Text style={styles.placeHolderTextStyleGender}>Gender</Text>
            </View>
            <View style={styles.genderContainer}>
              {['Male', 'Female', 'Rather not say'].map(item => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.genderButton,
                    gender === item
                      ? {
                          width: horizontalScale(120),
                          height: verticalScale(55),
                          borderWidth: 1,
                          borderRadius: 10,
                          borderColor: '#828CA91A',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }
                      : {
                          width: horizontalScale(120),
                          height: verticalScale(55),
                          borderWidth: 1,
                          borderRadius: 10,
                          borderColor: '#828CA91A',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                  ]}
                  onPress={() => setGender(item)}>
                  <View style={styles.genderContent}>
                    {gender === item && (
                      <Image source={IMAGES.rect} style={styles.genderImage} />
                    )}
                    <Text style={styles.genderText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: verticalScale(230),
            alignItems: 'center',
          }}>
          <Pressable onPress={() => navigation.navigate(SCREENS.Verification)}>
            <LinearGradient
              style={styles.button}
              colors={['#F93DAB', '#A03FE3', '#29F1E5']}
              angle={170}
              useAngle={true}>
              <Text style={styles.buttonText}>Get started</Text>
            </LinearGradient>
          </Pressable>
        </View>
        <View
          style={{
            alignItems: 'center',
            bottom: verticalScale(15),
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: fontScale(18),
              fontFamily: 'Urbanist-Medium',
            }}>
            Already have an account?
            {
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: '#F93DAB',
                  fontSize: fontScale(18),
                  fontFamily: 'Urbanist-Medium',
                }}>
                <Text style={{}}>Sign in</Text>
              </Text>
            }
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  fontScale,
} from '../../Utils/ScaleSize/index';
import IMAGES from '../../Assets/Constants/Images';
import SCREENS from '../../Assets/Constants/Screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backArrowView: {
    marginLeft: horizontalScale(25),
    marginTop: verticalScale(80),
  },
  gradientBorder: {
    padding: 2, // Border thickness
    borderRadius: 25, // Rounded border
  },
  dateArrowIcon: {
    position: 'absolute',
    right: horizontalScale(40),
    top: verticalScale(25),
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(10),
  },
  genderButton: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: fontScale(18),
    fontFamily: 'Urbanist-SemiBold',
  },
  genderContent: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  genderImage: {
    width: horizontalScale(120), // Adjust as needed
    height: verticalScale(55), // Adjust as needed
    resizeMode: 'contain',
  },
  genderText: {
    position: 'absolute', // Center text over the image
    fontSize: fontScale(14),
    fontFamily: 'Urbanist-Medium',
    color: '#fff', // Adjust text color for visibility
  },
  button: {
    width: horizontalScale(310),
    height: verticalScale(55),
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(50),
  },
  backArrowViewStyle: {
    width: horizontalScale(45),
    height: verticalScale(49),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF1A',
    borderWidth: 0.5,
    borderRadius: 30,
  },
  genderImageContainer: {
    alignItems: 'center',
    marginTop: verticalScale(10),
  },

  dateInput: {
    borderRadius: 10,
    width: horizontalScale(375),
    backgroundColor: '#828CA91A',
    paddingLeft: horizontalScale(35),
    color: 'white',
    height: verticalScale(55),
    fontSize: fontScale(16),
    fontFamily: 'Urbanist-Medium',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: horizontalScale(375),
    backgroundColor: '#828CA91A',
    paddingHorizontal: horizontalScale(15),
    height: verticalScale(55),
  },
  genderSelected: {
    borderColor: '#a855f7',
    borderWidth: 1.5,
  },

  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.9,
    borderColor: '#828CA91A',
    width: horizontalScale(375),
    backgroundColor: '#828CA91A',
    paddingLeft: horizontalScale(35),
    color: 'white',
    height: verticalScale(55),
    fontSize: fontScale(18),
    fontFamily: 'Urbanist-Medium',
  },
  phoneInput: {
    color: 'white',
    marginLeft: 10,
    flex: 1,
  },
  welcomeTextStyle: {
    fontSize: fontScale(20),
    color: 'white',
    fontFamily: 'Urbanist-Medium',
  },
  placeHolderTextStyle: {
    color: 'white',
    fontSize: fontScale(16),
    top: verticalScale(7),
    fontFamily: 'Urbanist-Bold',
  },
  placeHolderTextStyleGender: {
    color: 'white',
    fontSize: fontScale(16),
    top: verticalScale(7),
    fontFamily: 'Urbanist-BoldItalic',
  },
});

export default Login;
