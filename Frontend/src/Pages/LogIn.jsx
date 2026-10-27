
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TokenDataContext } from "./TokenContext";

const LogIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useContext(TokenDataContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      // Step 1: Generate login token
      const response = await fetch(
        "http://localhost:8080/public/log-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.trim(),
            password: password,
          }),
        }
      );

      const result = await response.text();

      console.log("Login response:", response.status, result);

      if (
        !response.ok ||
        !result.trim() ||
        result.trim() === "username and password not match"
      ) {
        setToken(null);
        sessionStorage.removeItem("token");
        alert("Invalid username or password");
        return;
      }

      const jwt = result.trim();

      // Step 2: Save token
      sessionStorage.setItem("token", jwt);
      setToken(jwt);

      // Step 3: Get logged-in user details
      const userResponse = await fetch(
        "http://localhost:8080/user/get-details",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (!userResponse.ok) {
        sessionStorage.removeItem("token");
        setToken(null);

        throw new Error(
          `User details request failed: ${userResponse.status}`
        );
      }

      const user = await userResponse.json();

      console.log("User details:", user);

      // Step 4: Navigate according to role
      if (user.role === "USER") {
        navigate("/UserMain");
      } else if (user.role === "POLICE") {
        navigate("/PoliceMain");
      } else if (user.role === "ADMIN") {
        navigate("/AdminMain");
      } else {
        alert("Unknown user role: " + user.role);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(
        "Login failed. Check the browser console and backend logs."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-15 flex items-center justify-center p-4 font-sans">
      <div
        className='bg-[url("https://i.pinimg.com/736x/45/7a/b2/457ab2ad5e493f9f1bd92dc4d722ee3e.jpg")] bg-cover bg-no-repeat bg-center rounded-xl p-8 w-full max-w-md shadow-2xl border-2 border-blue-500'
      >
        <h2 className="text-black text-2xl font-semibold text-center mb-8 tracking-wide">
          eCrimePortal Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-5">
            <label
              className="block text-black text-sm mb-2"
              htmlFor="username"
            >
              UserName
            </label>

            <input
              required
              id="username"
              name="username"
              type="text"
              placeholder="Enter your Username"
              autoComplete="username"
              className="w-full bg-[#f0f2f5] text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              className="block text-black text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>

            <input
              required
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full bg-[#f0f2f5] text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f0f2f5] text-[#3171c6] font-medium py-3 rounded-md hover:bg-white transition duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex justify-center items-center my-5">
          <span className="bg-[#1c4786] text-white text-xs px-4 py-1.5 rounded-full">
            OR
          </span>
        </div>

        {/* Google Sign In */}
        <a
          href="http://localhost:8080/oauth2/authorization/google"
          className="w-full bg-[#f0f2f5] text-gray-700 font-medium py-3 rounded-md flex items-center justify-center gap-2 hover:bg-white transition duration-200 text-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.42 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>

          <span>Sign in with Google</span>
        </a>

        {/* Register Link */}
        <p className="text-center text-white text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="/Register"
            className="font-semibold underline hover:text-gray-200"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
