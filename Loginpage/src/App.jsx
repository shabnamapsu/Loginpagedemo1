import React, { useState } from 'react';

function App() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const res = await fetch("http://localhost:3000/api/register",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    console.log(data);
    alert(data.message || "Form submitted");
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 to-amber-400 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-8">
          Login Form
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-lg md:text-xl font-medium mb-2">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              className="p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg"
              value={userData.username}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-lg md:text-xl font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg"
              value={userData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-lg md:text-xl font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="p-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg"
              value={userData.password}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-amber-600 hover:bg-amber-700 text-white text-xl font-semibold p-3 rounded-lg transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
