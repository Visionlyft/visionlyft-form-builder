import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import {
  FormBuilderProps,
  defaultInputStyle,
  defaultInputTextAreaStyle,
  defaultInputTextAreaInnerStyle,
} from "./types";
import { validateValues } from "./formValidation";

interface FormBuilderReturn {
  form: JSX.Element;
  handleSubmit: () => void;
}

export const FormBuilder = ({
  initialValues,
  validationSchema,
  inputStyle,
  inputTextAreaStyle,
  inputTextAreaInnerStyle,
  labels,
  onSubmit,
}: FormBuilderProps): FormBuilderReturn => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
              <View>
                <TextInput
                  placeholder={labels && labels[key] ? labels[key] : key}
                  value={values[key]}
                  onChangeText={(value) => handleChange(key, value)}
                  style={[defaultInputStyle, inputStyle]}
                />
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
