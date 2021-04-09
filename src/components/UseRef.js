import React, { 
  useRef,
  useState,
} from 'react'
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';

const UseRef = () => {
  const [{ count, count2 }, setCount] = useState({ count: 0, count2: 0 });
  const [values, handleChange ] = useForm({ email: '', password: '' });
  const { data, loading } = useFetch('http://numbersapi.com/43/trivia');
  const inputRef = useRef();

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
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            ref={inputRef}
          />
          <button
            type='button'
            onClick={() => inputRef.current.focus()}
          >
            focus email input
          </button>
          <input
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
          />
        </div>
      </div>
      {loading ? 'loading' : data}
    </div>
  );
};

export default UseRef;
