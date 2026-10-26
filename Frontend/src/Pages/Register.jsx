import { useEffect, useState } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom'

const Register = () => {

  const [registerButton, setRegisterButton] = useState(<h1>Register</h1>)
  const [msg, setMsg] = useState('')
  const [userNameStatus, setUserNameStatus] = useState('')
  const [mobileStatus, setMobileStatus] = useState('')
  const [emailStatus, setEmailStatus] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [dob, setDob] = useState()


  const submitted = (e) => {
    e.preventDefault()
  }


  const checkUsername = async () => {
    let link = "http://localhost:8080/public/check-username"
    const response = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: username
    });
    const result = await response.text()
    if (result === "Username already exists" || username.length < 6) {
      setUserNameStatus(<p className='text-sm mt-0.5 text-red-600'>not available</p>)
    }
    if (result === "ok" && username.length > 5) {
      setUserNameStatus(<p className='text-sm mt-0.5 text-green-600'>available</p>)
      return result
    }

  }

  useEffect(() => {
    if (username) {
      checkUsername()
    }
    else {
      setUserNameStatus('')
    }
  }, [username]);


  const checkMobile = async () => {
    let link = "http://localhost:8080/public/check-mobile"
    const response = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: mobile
    });
    const result = await response.text()
    if (result === "Mobile no. already exists") {
      setMobileStatus(<p className='text-sm text-red-600'>already exists</p>)
    }
    else if (mobile.length < 10) {
      setMobileStatus(<p className='text-sm text-red-600'>enter full no.</p>)
    }
    else if (result === "ok" && mobile.length == 10) {
      setMobileStatus('')
      return result
    }
  }

  useEffect(() => {
    if (mobile) {
      checkMobile()
    }
    else {
      setMobileStatus('')
    }
  }
    , [mobile]);


  const checkEmail = async () => {
    let link = "http://localhost:8080/public/check-email"
    const response = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: email
    });
    const result = await response.text()
    if (result === "Email already exists") {
      setEmailStatus(<p className='text-sm text-red-600'>already exists</p>)
    }
    else if (result === "ok" && email.length > 14) {
      setEmailStatus('')
      return result
    }
  }

  useEffect(() => {
    if (email) {
      checkEmail()
    }
    else {
      setEmailStatus('')
    }
  }, [email]);


  const msgAlert = () => {

    if (password.length < 8) {
      setMsg("password should be 8 digits long")
      return false
    }
    else if (password != rePassword) {
      setMsg('Password is not matching')
      return false
    }
    else {
      setMsg('')
      return true
    }
  }

  useEffect(() => {
    if (password || rePassword) {
      msgAlert()
    }
    else {
      setMsg('')
    }
  },
    [password, rePassword]
  );


  const save = async () => {
    if (username && mobile && email && password && rePassword && dob && name && address) {
      const a = await checkUsername();
      const b = await checkMobile();
      const c = await checkEmail();
      if (a === "ok" && b === "ok" & c === "ok" && msgAlert()) {
        let link = "http://localhost:8080/public/sign-up"
        const response = await fetch(link, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username, dob: dob, name: name, mobile: mobile, email: email, password: rePassword, address: address })
        });
        const result = await response.text()
        if (result === "saved") {
          return result
        }
      }
    }
  }


  const check = () => {

    const x = async () => {
      const a = await save();
      if (a === "saved" && name && dob && address) {
        console.log('done')
        setRegisterButton(<Link to={"/LogIn"}>Go to login</Link>)
        alert("Successfully registered")
      }
    }; x()
  }





  return (
    <div className="flex justify-center py-12 bg-[#111C30] text-white">
      <div className=" h-full p-20 w-4/7 bg-[#0B1524] rounded-2xl ">

        <h1 className="font-bold text-4xl pb-4 text-center">Register Details</h1>
        <p className='text-center text-red-600 h-3 text-sm'>{msg}</p>
        <form onSubmit={(e) => {
          submitted(e)
        }}>
          <div className="flex gap-30 mt-5">
            <div>
              <div className='flex flex-row justify-between mr-3'>
                <label className="block font-bold   mb-2" htmlFor="username">
                  Username
                </label>
                {userNameStatus}
              </div>
              <input
                required
                id="username"
                type="text"
                placeholder="Enter your Username"
                className="w-full bg-gray-200 text-gray-800 pl-2 mr-30  py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <label className="block font-bold text-sm font-boldmb-2" htmlFor="mobile">
                Password
              </label>
              <input
                required
                id="password"
                type="password"
                placeholder="Create your new Password"
                className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <label className="block text-sm font-bold font-boldmb-2" htmlFor="rePassword">
                Re-enter Password
              </label>
              <input
                required
                id="rePassword"
                type="password"
                placeholder="Re-enter your Password"
                className="w-full bg-gray-200  text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                value={rePassword}
                onChange={(e) => {
                  setRePassword(e.target.value)
                }}
              />

            </div>
            <div>
              <label className="block  text-sm font-bold mb-2" htmlFor="fullname">
                Full Name
              </label>
              <input
                required
                id="fullname"
                type="text"
                placeholder="Enter your Full name"
                className="w-full bg-gray-200 text-gray-800 pl-2 mr-30  py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <label className="block font-bold text-sm mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                required
                id="dob"
                type="date"
                placeholder="Enter your Full date of birth"
                className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />

              <div className='flex flex-row justify-between mr-2 py-1'>
                <label className="block  text-sm font-bold " htmlFor="mobile">
                  Mobile
                </label>
                {mobileStatus}
              </div>
              <input
                required
                id="mobile"
                type="tel"
                maxLength={10}
                minLength={9}
                placeholder="Enter your valid phone no."
                className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />


            </div>

          </div>

          <div>
            <div className='flex flex-row justify-between mr-10 mt-0.5 '>
              <label className="block  font-bold text-sm mb-2" htmlFor="email">
                Email
              </label>
              {emailStatus}
            </div>
            <input
              required
              id="email"
              type="email"
              placeholder="Enter your Email"

              className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-sm"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label className="block qfont-bold text-sm mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              required
              cols={30}
              rows={5}
              id="address"
              type="text"
              placeholder="Enter your Full Address"
              className="w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2  focus:ring-blue-300 placeholder-gray-500 text-sm"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <div className="text-center pt-4">
              <button onClick={() => [
                check()

              ]} className="bg-blue-800 text-white w-140 h-10 rounded-3xl">
                {registerButton}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
