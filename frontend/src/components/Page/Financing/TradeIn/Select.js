import React from 'react';
import { Field , ErrorMessage, useField } from 'formik';
 
 const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const {  name, options, ...rest } = props
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
     <Field as='select' className=" shadow-none"  id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

export default Select