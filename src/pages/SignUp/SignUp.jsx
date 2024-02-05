import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Input from "../../components/Shared/Inputs/Input";
import Button from "../../components/Shared/Button/Button";
import { setUser } from "../../store/Reducer/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

/**
 * SignUp Component
 *
 * This component provides a user interface for signing up. It includes a form with fields for
 * entering a phone number and password. The form is validated using the react-hook-form library.
 *
 * Features:
 * - Phone number input using react-phone-input-2.
 * - Password input with validation messages.
 * - Error message display for login errors.
 * - Form submission triggers authentication and dispatches user information to the Redux store.
 * - Success toast notification upon successful authentication.
 * @returns {JSX.Element} - The rendered SignUp component.
 */


export default function SignUp() {
  const { register, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm();
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoginError("");
    const user = { phoneNumber: data.phoneNumber, password: data.password };
    dispatch(setUser(user));
    toast.success("Congratulation!! You Are Authenticated!!");
    reset();
    navigate('/');
  };

  return (
    <div className="container">
      <div className="lg:px-16 bg-base-200 py-16">
        <div className="mb-10">
          <h1 className="text-4xl text-center font-bold">Sign Up Here!</h1>
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
              <Button type="submit">Sign Up</Button>
            </div>
            <div className="text-center mt-1">
              <p className="text-sm">Already have an account? &nbsp;
                <Link to="/login" className="text-primary">
                  login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
