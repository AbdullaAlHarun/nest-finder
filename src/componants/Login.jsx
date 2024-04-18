import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContex } from '../providers/AuthProvider';

const Login = () => {
  const { register, formState: { errors } } = useForm();

const {signInUser} = useContext(AuthContex)

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    signInUser(email,password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error =>{
        console.error(error)
    })
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input {...register("email", { required: true })} type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" />
            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input {...register("password", { required: true })} type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md" />
            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            <a href="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Create an account</a>
          </div>
        </form>
        <div className="mt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login with Google</button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 w-full">Login with GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
