import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {verticalScale, horizontalScale, fontScale} from '../../Utils/ScaleSize';
import LinearGradient from 'react-native-linear-gradient';

type OTPState = {
  T1: string;
  T2: string;
  T3: string;
  T4: string;
};

const OTP: React.FC = () => {
  const [state, setState] = useState<OTPState>({
    T1: '',
    T2: '',
    T3: '',
    T4: '',
  });
  const [focusField, setFocusField] = useState<string | null>(null);

  const E1 = useRef<TextInput>(null);
  const E2 = useRef<TextInput>(null);
  const E3 = useRef<TextInput>(null);
  const E4 = useRef<TextInput>(null);

  const handleChange = (key: keyof OTPState, value: string) => {
    setState(prevState => ({...prevState, [key]: value}));

    switch (key) {
      case 'T1':
        if (value.length >= 1) E2.current?.focus();
        break;
      case 'T2':
        if (value.length >= 1) E3.current?.focus();
        else E1.current?.focus();
        break;
      case 'T3':
        if (value.length >= 1) E4.current?.focus();
        else E2.current?.focus();
        break;
      case 'T4':
        if (value.length < 1) E3.current?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#050507', '#07070b', '#120f1c', '#2c2145']}
        style={styles.container}
        angle={360}
        useAngle={true}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.textView}>
            <Text style={styles.verificationText}>
              Please enter the verification code here
            </Text>
          </View>
        </View>

        <View style={styles.codeView}>
          {(['T1', 'T2', 'T3', 'T4'] as (keyof OTPState)[]).map(
            (key, index) => (
              <TextInput
                key={key}
                style={[
                  styles.inputCode,
                  focusField === key && styles.inputFocus,
                ]}
                onChangeText={text => handleChange(key, text)}
                ref={[E1, E2, E3, E4][index]}
                textAlign="center"
                value={state[key]}
                maxLength={1}
                keyboardType="phone-pad"
                onFocus={() => setFocusField(key)}
                onBlur={() => setFocusField(null)}
              />
            ),
          )}
        </View>
        <View style = {{alignItems: 'center'}}>
          <View style={styles.resendView}>
            <Text style={styles.resendText}>Resend Code</Text>
            <TouchableOpacity>
              <Text style={styles.resendButtonText}>Resend code via Whatsapp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textView: {
    width: horizontalScale(385),
    marginTop: verticalScale(200),
  },
  verificationText: {
    fontFamily: 'Urbanist-SemiBold',
    color: 'white',
    fontSize: fontScale(28),
  },
  infoText: {
    color: '#8a8f94',
    fontFamily: 'Poppins-Regular',
    fontSize: fontScale(16),
    marginTop: verticalScale(40),
  },
  codeView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(60),
    flexDirection: 'row',
    gap: verticalScale(25),
  },
  inputCode: {
    width: verticalScale(90),
    fontSize: fontScale(24),
    borderWidth: 1,
    color: 'white',
    borderColor: '#828CA91A',
    textAlignVertical: 'center',
    height: verticalScale(60),
    backgroundColor: '#828CA91A',
    borderRadius: 10,
  },
  inputFocus: {
    borderColor: '#B14B96',
  },
  resendView: {
    width: horizontalScale(385),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(30),
  },
  resendText: {
    color: '#F93DAB',
    fontFamily: 'Urbanist-Regular',
    textDecorationLine: 'underline',
    fontSize: fontScale(16),
  },
  resendButtonText: {
    color: 'white',
    fontFamily: 'Urbanist-Thin',
    textDecorationLine: 'underline',
    fontSize: fontScale(17),
  },
});

export default OTP;
