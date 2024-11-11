export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-300">
    <div className="mb-6">
      <img src="Background.png" alt="Your Logo" className="w-24 h-24" />
    </div>
    <form className="flex flex-col items-center gap-4 w-80">
      <input
        type="text"
        placeholder="User ID"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        type="submit"
        className="w-80 py-2 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </form>
  </div>
      
  );
};

export default Login;

