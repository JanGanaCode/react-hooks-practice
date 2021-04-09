import React, { useState } from 'react'

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values, 
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

const UseState = () => {
  const [{ count, count2 }, setCount] = useState({ count: 0, count2: 0 });
  const [values, handleChange ] = useForm({ email: '', password: '' });

  return (
    <div>
      <div>Count 1: {count}</div>
      <div>Count 2: {count2}</div>
      <div>
        <button
          type='button' 
          onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count + 1 }))}>
          update count 1
        </button>
        <button
          type='button'
          onClick={() => setCount(currentState => ({ ...currentState, count2: currentState.count2 + 1 }))}>
          update count 2
        </button>
        <div>
          <input type='email' name='email' value={values.email} onChange={handleChange} />
          <input type='password' name='password' value={values.password} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default UseState;
