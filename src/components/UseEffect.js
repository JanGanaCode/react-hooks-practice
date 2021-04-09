import React, { 
  // useEffect,
  useState,
} from 'react'
import { useFetch } from '../hooks/useFetch';
import { useForm } from '../hooks/useForm';

const UseEffect = () => {
  const [{ count, count2 }, setCount] = useState({ count: 0, count2: 0 });
  const [values, handleChange ] = useForm({ email: '', password: '' });

  /* 
    useEffect(() => {
      console.log('render on email change');
    }, [values.email]);
  */

  /* 
    cleanup function

    useEffect(() => {
      const onMouseMove = (e) => {
        console.log(e);
      }
      window.addEventListener('mousemove', onMouseMove);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }, []);
  */

  /* 
    multiple useEffects - fires in order
    
    useEffect(() => {
      console.log('mount 1');
    }, []);

    useEffect(() => {
      console.log('mount 2');
    }, []);
  */

  /* 
    fetch
    
    useEffect(() => {
      console.log('mount 1');
    }, []);

    useEffect(() => {
      console.log('mount 2');
    }, []);
  */
  const { data, loading } = useFetch('http://numbersapi.com/43/trivia');
  /* 
    useEffect(() => {
      localStorage.setItem('count', JSON.stringify(count));
    }
  */

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
      {loading ? 'loading' : data}
    </div>
  );
};

export default UseEffect;
