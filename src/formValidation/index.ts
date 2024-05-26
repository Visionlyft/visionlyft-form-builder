import {ValidationSchema} from '../types';

export const validateValues = (
  values: {[key: string]: string},
  schema: ValidationSchema,
) => {
  const errors: {[key: string]: string} = {};

  Object.keys(schema).forEach(key => {
    const rules = schema[key];
    const value = values[key];

    if (rules.required && !value) {
      errors[key] = 'This field is required';
    }

    if (rules.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors[key] = 'Invalid email address';
      }
    }

    if (rules.type === 'phone' && value) {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (!phoneRegex.test(value)) {
        errors[key] = 'Invalid phone number';
      }
    }

    if (rules.maxLength && value && value.length > rules.maxLength) {
      errors[key] = `Maximum ${rules.maxLength} characters allowed`;
    }
  });

  return errors;
};
