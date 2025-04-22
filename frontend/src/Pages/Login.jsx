import { useState } from "react"; // Add this import to resolve the issue
import { useNavigate } from "react-router-dom"; // Ensure this is also imported correctly

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Only for sign up
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  
    const requestData = {
      email,
      password,
      ...(currentState === "Sign Up" && { name }), // Add name for signup
    };
  
    try {
      const response = await fetch(
        currentState === "Sign Up" ? "/api/user/register" : "/api/user/login", // Update the URL here
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      const data = await response.json();
  
      if (data.success) {
        // On successful login/signup, store the token (JWT)
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard"); // Redirect to the dashboard after login/signup
      } else {
        alert(data.message); // Handle error
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login/signup.");
    }
  };
  
  

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w--[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gra-400">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-xs">Forgot your password? </p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">
            Create Account
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white text-sm px-24 my-3 py-3 rounded hover:bg-blue-600">
        {currentState === "Login" ? "Sign In" : "Sign Up"}{" "}
      </button>
    </form>
  );
};

export default Login;
