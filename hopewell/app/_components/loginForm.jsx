// components/LoginForm.js  
import { useForm } from 'react-hook-form';
import * as yup from 'yup'; // For form validation
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to server)
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={register}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
