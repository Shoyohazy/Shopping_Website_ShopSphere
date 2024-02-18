import React from "react";

function Login() {
  return (
    <div className=" max-w-md mx-auto mt-[10%] bg-slate-400 rounded-md">
      <form className="max-w-sm mx-auto pt-4 pb-4">
        <label className="block mb-2">
          Username:
          <input
            className="w-full px-4 py-2 border text-black rounded focus:outline-none focus:border-blue-500"
            type="text"
            name="username"
          />
        </label>
        <label className="block mb-2">
          Password:
          <input
            className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
          />
        </label>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
