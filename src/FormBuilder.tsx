import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { FormBuilderProps } from "./types";
import {
  defaultInputStyle,
  defaultLeftIconStyle,
  defaultRightIconStyle,
  defaultInputViewStyle,
  defaultInputTextAreaStyle,
  defaultInputTextAreaInnerStyle,
} from "./styles";
import { validateValues } from "./formValidation";

interface FormBuilderReturn {
  form: JSX.Element;
  handleSubmit: () => void;
}

const isPasswordIconObject = (
  icon: JSX.Element | { visible: JSX.Element; hidden: JSX.Element }
): icon is { visible: JSX.Element; hidden: JSX.Element } => {
  return (
    typeof icon !== "undefined" &&
    typeof (icon as { visible: JSX.Element; hidden: JSX.Element }).visible !==
      "undefined" &&
    typeof (icon as { visible: JSX.Element; hidden: JSX.Element }).hidden !==
      "undefined"
  );
};

export const FormBuilder = ({
  initialValues,
  validationSchema,
  inputStyle,
  inputTextAreaStyle,
  inputTextAreaInnerStyle,
  labels,
  onSubmit,
  leftIcons,
  rightIcons,
}: FormBuilderProps): FormBuilderReturn => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleChange = (name: string, value: string) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const newErrors = validateValues(values, validationSchema);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(values);
    }
  };

  const togglePasswordVisibility = (key: string) => {
    setShowPassword({
      ...showPassword,
      [key]: !showPassword[key],
    });
  };

  return {
    form: (
      <View>
        {Object.keys(initialValues).map((key) => (
          <View key={key}>
            {validationSchema[key].type === "textarea" ? (
              <View style={[defaultInputTextAreaStyle, inputTextAreaStyle]}>
                <TextInput
                  multiline
                  placeholder={labels && labels[key] ? labels[key] : key}
                  value={values[key]}
                  onChangeText={(value) => handleChange(key, value)}
                  style={[
                    defaultInputTextAreaInnerStyle,
                    inputTextAreaInnerStyle,
                  ]}
                />
              </View>
            ) : (
              <View style={[defaultInputViewStyle, inputStyle]}>
                {leftIcons && leftIcons[key] && (
                  <View style={defaultLeftIconStyle}>{leftIcons[key]}</View>
                )}
                <TextInput
                  placeholder={labels && labels[key] ? labels[key] : key}
                  value={values[key]}
                  onChangeText={(value) => handleChange(key, value)}
                  secureTextEntry={key === "password" && !showPassword[key]}
                  style={defaultInputStyle}
                />
                {rightIcons && rightIcons[key] && (
                  <TouchableOpacity
                    onPress={() =>
                      key === "password" && togglePasswordVisibility(key)
                    }
                    style={defaultRightIconStyle}
                  >
                    {key === "password" && isPasswordIconObject(rightIcons[key])
                      ? showPassword[key]
                        ? rightIcons[key].visible
                        : rightIcons[key].hidden
                      : rightIcons[key]}
                  </TouchableOpacity>
                )}
              </View>
            )}
            {errors[key] && <Text style={{ color: "red" }}>{errors[key]}</Text>}
          </View>
        ))}
      </View>
    ),
    handleSubmit,
  };
};
