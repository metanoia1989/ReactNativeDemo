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
  gray_text: {
    color: '#888',
  },
  grays_text: {
    color: '#aaa',
  },

  text_df: {
    fontSize: 17,
  },
  text_lg: {
    fontSize: 22,
  },

  center_text: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },

});

/**
 * 各种类型的背景色
 */
const bgs = StyleSheet.create({
  primary_bg: {
    backgroundColor: colors.primary,
  },
  danger_bg: {
    backgroundColor: colors.danger,
  }, 
  warning_bg: {
    backgroundColor: colors.warning,
  }, 
  success_bg: {
    backgroundColor: colors.success, 
  }, 
});


/**
 * 各种类型的固定布局
 */
const fixeds = StyleSheet.create({
  title_fixed: {
    elevation: 3,
    borderBottomWidth: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

/** 
 * 各种类型的边框
 */
const borders = StyleSheet.create({
  noBorder: {
    borderWidth: 0,
  },
  noAllBorder: {
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  noTopBorder: {
    borderTopWidth: 0,
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  noLeftBorder: {
    borderLeftWidth: 0,
  },
  noRightBorder: {
    borderRightWidth: 0,
  },
});


export {
  buttons,
  texts,
  fixeds,
  borders,
  bgs,
}