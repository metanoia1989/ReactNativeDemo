import { StyleSheet, Platform } from 'react-native';
import colors from './colors';     

/** 
 * 各种类型的按钮
 */
const buttons = StyleSheet.create({
  shadow_button: {
    fontSize: 15,
    height: 30,
    position: 'absolute',
    right: 10,
    marginVertical: 5,
    textAlign: 'center',
    textAlignVertical:'center',
    paddingHorizontal: 6,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
      android: {
        elevation: 0.5,
        borderRadius: 4,
      },
    }),
  },
});

/** 
 * 各种类型的文本
 */
const texts = StyleSheet.create({
  primary_text: {
    color: colors.primary,
  },
  danger_text: {
    color: colors.danger,
  },
  warning_text: {
    color: colors.warning,
  },
  lightgray_text: {
    color: colors.lightgray,
  },
  big_text: {
    fontSize: 20,
  },
  white_text: {
    color: 'white',
  },
});

const fixeds = StyleSheet.create({
  title_fixed: {
    elevation: 3,
    borderBottomWidth: 0,
    position: 'absolute',
    top: 0,
  },
});


export {
  buttons,
  texts,
  fixeds,
}