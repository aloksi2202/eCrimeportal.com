
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:8080/public";

const Register = () => {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [dob, setDob] = useState("");

  const [userNameStatus, setUserNameStatus] = useState("");
  const [mobileStatus, setMobileStatus] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  // Check username availability
  const checkUsername = async (value = username) => {
    const cleanUsername = value.trim();

    if (cleanUsername.length < 6) {
      setUserNameStatus("Username must be at least 6 characters");
      return false;
    }

    try {
      const response = await fetch(`${API_URL}/check-username`, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: cleanUsername,
      });

      if (!response.ok) {
        throw new Error("Username check failed");
      }

      const result = (await response.text()).trim();

      if (result === "ok") {
        setUserNameStatus("Username available");
        return true;
      }

      if (result === "Username already exists") {
        setUserNameStatus("Username already exists");
        return false;
      }

      setUserNameStatus(result || "Could not check username");
      return false;
    } catch (error) {
      console.error("Username check error:", error);
      setUserNameStatus("Unable to check username");
      return false;
    }
  };

  // Check mobile availability
  const checkMobile = async (value = mobile) => {
    const cleanMobile = value.trim();

    if (!/^\d{10}$/.test(cleanMobile)) {
      setMobileStatus("Enter a valid 10-digit mobile number");
      return false;
    }

    try {
      const response = await fetch(`${API_URL}/check-mobile`, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: cleanMobile,
      });

      if (!response.ok) {
        throw new Error("Mobile check failed");
      }

      const result = (await response.text()).trim();

      if (result === "ok") {
        setMobileStatus("");
        return true;
      }

      if (result === "Mobile no. already exists") {
        setMobileStatus("Mobile number already exists");
        return false;
      }

      setMobileStatus(result || "Could not check mobile");
      return false;
    } catch (error) {
      console.error("Mobile check error:", error);
      setMobileStatus("Unable to check mobile");
      return false;
    }
  };

  // Check email availability
  const checkEmail = async (value = email) => {
    const cleanEmail = value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setEmailStatus("Enter a valid email address");
      return false;
    }

    try {
      const response = await fetch(`${API_URL}/check-email`, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: cleanEmail,
      });

      if (!response.ok) {
        throw new Error("Email check failed");
      }

      const result = (await response.text()).trim();

      if (result === "ok") {
        setEmailStatus("");
        return true;
      }

      if (result === "Email already exists") {
        setEmailStatus("Email already exists");
        return false;
      }

      setEmailStatus(result || "Could not check email");
      return false;
    } catch (error) {
      console.error("Email check error:", error);
      setEmailStatus("Unable to check email");
      return false;
    }
  };

  // Optional live checks while typing
  useEffect(() => {
    if (!username.trim()) {
      setUserNameStatus("");
      return;
    }

    const timer = setTimeout(() => {
      checkUsername(username);
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  useEffect(() => {
    if (!mobile.trim()) {
      setMobileStatus("");
      return;
    }

    if (mobile.length < 10) {
      setMobileStatus("Enter a 10-digit mobile number");
      return;
    }

    const timer = setTimeout(() => {
      checkMobile(mobile);
    }, 500);

    return () => clearTimeout(timer);
  }, [mobile]);

  useEffect(() => {
    if (!email.trim()) {
      setEmailStatus("");
      return;
    }

    const timer = setTimeout(() => {
      checkEmail(email);
    }, 500);

    return () => clearTimeout(timer);
  }, [email]);

  // Register user
  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg("");

    if (loading || registered) return;

    if (
      !username.trim() ||
      !name.trim() ||
      !mobile.trim() ||
      !email.trim() ||
      !address.trim() ||
      !dob ||
      !password ||
      !rePassword
    ) {
      setMsg("Please fill in all fields");
      return;
    }

    if (username.trim().length < 6) {
      setMsg("Username must be at least 6 characters");
      return;
    }

    if (!/^\d{10}$/.test(mobile.trim())) {
      setMsg("Mobile number must contain exactly 10 digits");
      return;
    }

    if (password.length < 8) {
      setMsg("Password must be at least 8 characters");
      return;
    }

    if (password !== rePassword) {
      setMsg("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // Recheck availability before registration
      const usernameAvailable = await checkUsername(username);
      const mobileAvailable = await checkMobile(mobile);
      const emailAvailable = await checkEmail(email);

      if (!usernameAvailable || !mobileAvailable || !emailAvailable) {
        setMsg("Please correct the username, mobile or email fields");
        return;
      }

      const response = await fetch(`${API_URL}/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          name: name.trim(),
          mobile: mobile.trim(),
          email: email.trim(),
          address: address.trim(),
          password: password,
          dob: dob,
        }),
      });

      const result = (await response.text()).trim();

      if (!response.ok || result !== "saved") {
        setMsg(result || `Registration failed (${response.status})`);
        return;
      }

      setRegistered(true);
      setMsg("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);
      setMsg(
        "Unable to connect to the server. Check that the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm";

  const labelClass = "block text-sm font-bold mb-2 mt-3";

  const statusClass = (status) =>
    status === "Username available"
      ? "text-sm mt-1 text-green-400"
      : "text-sm mt-1 text-red-400";

  return (
    <div className="min-h-screen flex justify-center items-center py-12 px-4 bg-[#111C30] text-white">
      <div className="w-full max-w-4xl p-6 md:p-12 bg-[#0B1524] rounded-2xl">
        <h1 className="font-bold text-3xl md:text-4xl pb-4 text-center">
          Register Details
        </h1>

        <p className="text-center text-red-400 min-h-6 text-sm">
          {msg}
        </p>

        {registered ? (
          <div className="text-center mt-6">
            <p className="text-green-400 mb-4">
              Your account has been created successfully.
            </p>
            <Link
              to="/LogIn"
              className="inline-block bg-blue-800 hover:bg-blue-700 px-8 py-3 rounded-3xl"
            >
              Go to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div>
                <label className={labelClass} htmlFor="username">
                  Username
                </label>
                <input
                  required
                  id="username"
                  type="text"
                  minLength={6}
                  autoComplete="username"
                  placeholder="Enter your username"
                  className={inputClass}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {userNameStatus && (
                  <p className={statusClass(userNameStatus)}>
                    {userNameStatus}
                  </p>
                )}

                <label className={labelClass} htmlFor="password">
                  Password
                </label>
                <input
                  required
                  id="password"
                  type="password"
                  minLength={8}
                  autoComplete="new-password"
                  placeholder="Create your password"
                  className={inputClass}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <label className={labelClass} htmlFor="rePassword">
                  Re-enter Password
                </label>
                <input
                  required
                  id="rePassword"
                  type="password"
                  minLength={8}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  className={inputClass}
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />

                {rePassword && password !== rePassword && (
                  <p className="text-sm mt-1 text-red-400">
                    Passwords do not match
                  </p>
                )}
              </div>

              <div>
                <label className={labelClass} htmlFor="fullname">
                  Full Name
                </label>
                <input
                  required
                  id="fullname"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={inputClass}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label className={labelClass} htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  required
                  id="dob"
                  type="date"
                  className={inputClass}
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />

                <label className={labelClass} htmlFor="mobile">
                  Mobile
                </label>
                <input
                  required
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  minLength={10}
                  autoComplete="tel"
                  placeholder="Enter your 10-digit mobile number"
                  className={inputClass}
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                  }
                />
                {mobileStatus && (
                  <p className="text-sm mt-1 text-red-400">
                    {mobileStatus}
                  </p>
                )}
              </div>
            </div>

            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input
              required
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              className={inputClass}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailStatus && (
              <p className="text-sm mt-1 text-red-400">{emailStatus}</p>
            )}

            <label className={labelClass} htmlFor="address">
              Address
            </label>
            <textarea
              required
              id="address"
              rows={4}
              placeholder="Enter your full address"
              className={inputClass}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-800 hover:bg-blue-700 disabled:opacity-60 text-white w-full md:w-64 h-12 rounded-3xl"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>

            <p className="text-center mt-5 text-sm">
              Already have an account?{" "}
              <Link to="/LogIn" className="text-blue-400 hover:underline">
                Login
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
