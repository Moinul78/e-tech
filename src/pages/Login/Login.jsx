import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Input from "../../components/Shared/Inputs/Input";
import Button from "../../components/Shared/Button/Button";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/Reducer/userSlice";
import toast from "react-hot-toast";
// import * as jwt from 'jsonwebtoken';


export default function LogIn() {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // Check if user is available in localStorage on component mount
  //   const storedUser = localStorage.getItem('user');
  //   const storedIsAuthenticated = localStorage.getItem('isAuthenticated');

  //   if (storedUser && storedIsAuthenticated) {
  //     // Parse stored user and set authentication state
  //     const user = JSON.parse(storedUser);
  //     dispatch(setUser(user));
  //   }
  // }, [dispatch, navigate]);

  // const generateJwtToken = (phoneNumber, password) => {
  //   //expiration time
  //   const expiresIn = '1d';
  //   const token = jwt.sign({ phoneNumber, password }, { expiresIn });
  //   return token;
  // };

  const onSubmit = (data) => {
    // Create JWT token using phone number and password (i am not using any secret key here)
    // const token = generateJwtToken(user.phoneNumber, user.password);
    // set token into localstorage
    // localStorage.setItem('token', token);
    // Dispatch the setUser action to update Redux store and localStorage
    const storedUser = localStorage.getItem('user');
    const user = JSON.parse(storedUser);
    if (user?.phoneNumber === data.phoneNumber && user?.password === data.password) {
      // Parse stored user and set authentication state
      dispatch(setUser(user));

      // Store authentication state in localStorage
      localStorage.setItem('isAuthenticated', true);
      navigate('/');
      toast.success('Login successful!');
      setLoginError("");
    } else {
      toast.error('user not found');
    }
  };





  return (
    <div className="container">
      <div className="lg:px-16 bg-base-200 py-16">
        <div className="mb-10">
          <h1 className="text-4xl text-center font-bold">Login now!</h1>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="p-16 w-full lg:w-[50%] lg:shadow-xl bg-base-100">
            <label className="text-primary1">Phone Number</label>
            <PhoneInput
              country={'bd'}
              inputStyle={{ width: '100%', height: '40px' }}
              inputClass="p-2 w-full border border-white-100 focus:border-primary"
              placeholder="Enter your phone number"
              value={watch('phoneNumber')}
              onChange={(formattedValue) => setValue('phoneNumber', formattedValue)}
            />
            {errors.phoneNumber && <p className="text-red-700 mt-2">{errors.phoneNumber?.message}</p>}

            <div className="mt-3">
              <Input
                label="Password"
                type="password"
                rest={{ ...register("password") }}
                placeholder="Enter your password"
                className="p-2 w-full border border-white-100 focus:border-primary"
              />
              {errors.password && <p className="text-red-700 mt-2">{errors.password?.message}</p>}
            </div>

            {loginError && <p className="text-red-700 mt-2">{loginError}</p>}
            <div className="mt-6">
              <Button type="submit">Login</Button>
            </div>
            <div className="text-center mt-1">
              <p className="text-sm">New here? &nbsp;
                <Link to="/sign-up" className="text-primary">
                  signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
