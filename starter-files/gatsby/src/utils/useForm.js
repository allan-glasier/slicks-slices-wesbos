import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    let { value } = e.target;
    // check if its a number and convert if yes
    if (e.target.type === 'number') {
      value = parseInt(value);
    }

    setValues({
      // copy the existing values
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }

  return { values, updateValue };
}
