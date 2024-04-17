
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Here you can perform registration logic
    console.log(data);
    // Show success toast/alert
    alert("Registration successful!");
  };

  return (
    <div className="container mx-auto w-96 mt-8 shadow-xl p-8">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input {...register("name", { required: true })} type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
          {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
          {errors.email && <p className="text-red-500 text-xs mt-1">Email is required and must be valid</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="photoURL">Photo URL</label>
          <input {...register("photoURL")} type="text" id="photoURL" className="w-full px-3 py-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])/ })} type="password" id="password" className="w-full px-3 py-2 border rounded-md" />
          {errors.password && <p className="text-red-500 text-xs mt-1">Password must be at least 6 characters long, contain at least one uppercase letter, and one lowercase letter</p>}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
      </form>
      <p className="mt-4 text-sm">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
    </div>
  );
};

export default Register;
