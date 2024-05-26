import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ValidationSchema {
  [key: string]: {
    required?: boolean;
    type?: 'email' | 'text' | 'phone' | 'textarea';
    maxLength?: number;
  };
}

export interface FormBuilderProps {
  initialValues: {[key: string]: string};
  validationSchema: ValidationSchema;
  onSubmit: (values: {[key: string]: string}) => void;
  inputStyle?: StyleProp<TextStyle>;
  inputTextAreaStyle?: StyleProp<ViewStyle>;
  inputTextAreaInnerStyle?: StyleProp<TextStyle>;
  labels?: {[key: string]: string};
}

export const defaultInputStyle: StyleProp<TextStyle> = {
  height: 40,
  borderWidth: 1,
  padding: 10,
  marginBottom: 10,
  borderColor: 'grey',
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
