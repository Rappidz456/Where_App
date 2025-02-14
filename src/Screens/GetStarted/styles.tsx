import { StyleSheet } from "react-native";
import { fontScale, horizontalScale, verticalScale } from "../../Utils/ScaleSize";

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
  });

  export default styles;