import React, { useState } from "react";
import Button from "./Button.tsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../Redux/userSlice.tsx";
import { toast } from "react-toastify";
import {UserProps} from '../../Redux/userSlice.tsx'


const Form:React.FC = () => {
  const location = useLocation();
  const endPath = location.pathname.split("/").pop();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState<UserProps>({
    username: "",
    password: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<UserProps>({});
  // const [submitting, setSubmitting] = useState(false);

  const validateValues = (user:UserProps) => {
    let errors:UserProps = {};
    if (!user.username) {
      errors.username = "Username is require";
    }
    if (!user.email) {
      errors.email = "Email is require";
    }
    if (!user.password) {
      errors.password = "Password is require";
    }
    if (!user.phone) {
      errors.phone = "phone is require";
    }
    return errors;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // for(let i in user){
    //     console.log(user[i] ,"ele")
    // }
    if (endPath === "register") {
      setErrors(validateValues(user));
      // setSubmitting(true);
      if (user.username !== "" && user.password !== "") {
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/login");
        toast("User Register Successfull !!", {
          position: "top-center",
          autoClose: 1000,
        });
      } 
    }

    if (endPath === "login") {
        const storedData = localStorage.getItem("user");
        const userInfo = storedData && JSON.parse(storedData);
    //   const userInfo = JSON.parse(localStorage.getItem("user"));
      if (userInfo) {
        if (
          user.username === userInfo.username &&
          user.password === userInfo.password
        ) {
          dispatch(getUser({ username: user.username, password:user.password }));
          navigate("/");
        } else {
          toast("Please Enter Correct Username and Password !!", {
            position: "top-center",
            autoClose: 1000,
          });
        }
      } else {
        toast("Please Signup Username and Password !!", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    }

  
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4 mt-10">
      <div className="flex flex-col gap-1">
        <label htmlFor="userName" className="text-left font-semibold pl-1">
          {endPath === 'login' ? 'Username:' : 'Name:'}
        </label>
        <input
          value={user.username}
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              username: e.target.value,
            }))
          }
          className="rounded-3xl px-4 py-1"
        />
        {(errors.username && user?.username?.length === 0 ) && (
          <span className="text-red-600">{errors.username}</span>
        )}
      </div>
      {endPath === "register" && (
        <>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-left font-semibold pl-1">
              Email:{" "}
            </label>
            <input
              type="email"
              value={user.email}
              minLength={10}
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              className="rounded-3xl px-4 py-1"
            />
            {(errors.email && user?.email?.length === 0 ) && (
              <span className="text-red-600">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-left font-semibold pl-1">
              Phone:{" "}
            </label>
            <input
              type="tel"
              value={user.phone}
              minLength={10}
              maxLength={10}
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
              className="rounded-3xl px-4 py-1"
            />
            {(errors.phone && user?.phone?.length === 0 ) && (
              <span className="text-red-600">{errors.phone}</span>
            )}
          </div>
        </>
      )}

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-left font-semibold pl-1">
          Password:{" "}
        </label>
        <input
          type="password"
          value={user.password}
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
          className="rounded-3xl px-4 py-1"
        />
        {(errors.password && user?.password?.length === 0 ) && (
          <span className="text-red-600">{errors.password}</span>
        )}
        <p className="text-right text-blue-600 cursor-pointer">
          Forget password?
        </p>
      </div>
      <Button
        name={endPath === "register" ? "Signup" : "Submit"}
        navClassName="bg-[#00aeef] text-white w-full text-md font-semibold mt-2 px-2 py-1 rounded-3xl tracking-wide"
        icons={''}
      />
    </form>
  );
};

export default Form;
