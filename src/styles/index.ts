import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export const defaultInputViewStyle: StyleProp<ViewStyle> = {
  height: 40,
  borderWidth: 1,
  marginBottom: 10,
  borderColor: 'grey',
  flexDirection: 'row',
  alignItems: 'center',
  overflow: 'hidden',
};

export const defaultInputStyle: StyleProp<TextStyle> = {
  flex: 1,
  height: '100%',
  paddingHorizontal: 10,
};

export const defaultLeftIconStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 8,
};

export const defaultRightIconStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 8,
};

export const defaultInputTextAreaStyle: StyleProp<ViewStyle> = {
  minHeight: 150,
  borderWidth: 1,
  marginBottom: 10,
  borderColor: 'grey',
};

export const defaultInputTextAreaInnerStyle: StyleProp<ViewStyle> = {
  minHeight: 40,
  paddingHorizontal: 10,
};
