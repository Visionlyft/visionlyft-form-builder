# @visionlyft/form-builder

A flexible and customizable form builder component for React Native applications.

## Installation

You can install `@visionlyft/form-builder` via npm or yarn:

```bash
npm install @visionlyft/form-builder
```

or

```bash
yarn add @visionlyft/form-builder
```

## Usage

<div style="display: flex; justify-content: center; align-items: center; gap: 10px;">
  <img src="https://raw.githubusercontent.com/thejaved/images/main/image2.png" alt="Default Form Builder" width="200" style="border: 1px solid #ddd;"/>
  <img src="https://raw.githubusercontent.com/thejaved/images/main/image1.png" alt="Customized Form Builder" width="200" style="border: 1px solid #ddd;"/>
</div>

```javascript
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { FormBuilder } from "@visionlyft/form-builder";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";

const App = () => {
  const { form, handleSubmit } = FormBuilder({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      message: "",
    },
    validationSchema: {
      name: { required: true },
      email: { required: true, type: "email" },
      phone: { required: true, type: "phone" },
      password: { required: true, type: "password" },
      message: { type: "textarea", maxLength: 200 },
    },
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      password: "Password",
      message: "Message",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    inputStyle: styles.inputStyle,
    inputTextAreaStyle: styles.inputTextAreaStyle,
    leftIcons: {
      name: <Icon name="user" size={20} />,
      email: <Icon name="mail" size={20} />,
      phone: <Icon name="phone" size={20} />,
      password: <Icon name="lock" size={20} />,
    },
    rightIcons: {
      email: <Icon name="checkcircle" size={20} />,
      password: {
        visible: <Icon name="eye" size={20} />,
        hidden: <Icon name="eyeo" size={20} />,
      },
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {form}
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 30,
    justifyContent: "center",
  },
  inputStyle: {
    borderWidth: 0,
    borderRadius: 5,
    height: 50,
    backgroundColor: "#EEF7FF",
    borderBottomWidth: 2,
    borderBottomColor: "#615EFC",
  },
  inputTextAreaStyle: {
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: "#EEF7FF",
    borderBottomWidth: 2,
    borderBottomColor: "#615EFC",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#615EFC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  submitText: {
    color: "white",
    fontWeight: "800",
  },
});

export default App;
```

## Author

Javed Khan

- GitHub: [thejaved](https://github.com/thejaved)
