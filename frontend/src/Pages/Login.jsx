import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); 
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const requestData = {
      email,
      password,
      ...(currentState === "Sign Up" && { name }),
    };

    try {
      const response = await fetch(
        `http://localhost:3000/api/user/${currentState === "Sign Up" ? "register" : "login"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const data = await response.json();
      console.log(data); // Debugging purpose

      if (data.token) {
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login/Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login/signup.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-400">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-xs">Forgot your password?</p>
        <p onClick={() => setCurrentState(currentState === "Login" ? "Sign Up" : "Login")} className="cursor-pointer">
          {currentState === "Login" ? "Create Account" : "Login Here"}
        </p>
      </div>

      <button className="bg-black text-white text-sm px-24 my-3 py-3 rounded hover:bg-blue-600">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
