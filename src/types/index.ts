import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ValidationSchema {
  [key: string]: {
    required?: boolean;
    type?: "email" | "text" | "phone" | "textarea" | "password";
    maxLength?: number;
  };
}

export interface FormBuilderProps {
  initialValues: { [key: string]: string };
  validationSchema: ValidationSchema;
  onSubmit: (values: { [key: string]: string }) => void;
  inputStyle?: StyleProp<TextStyle>;
  inputTextAreaStyle?: StyleProp<ViewStyle>;
  inputTextAreaInnerStyle?: StyleProp<TextStyle>;
  labels?: { [key: string]: string };
  leftIcons?: { [key: string]: JSX.Element };
  rightIcons?: {
    [key: string]: JSX.Element | any;
  };
}
