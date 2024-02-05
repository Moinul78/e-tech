import React from "react";
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Input from "../../components/Shared/Inputs/Input";
import Button from "../../components/Shared/Button/Button";

/**
 * This component provides a form for adding a new customer/user. It utilizes the react-hook-form library
 * for form handling and validation. Users can input the phone number and password of the new customer.
 *
 * Features:
 * - Utilizes react-hook-form for form handling and validation.
 * - Includes a PhoneInput component for entering the customer's phone number.
 * - Displays a form with fields for phone number and password.
 * - Resets the form upon successful submission.
 * @returns {JSX.Element} - The rendered AddNewUser component.
 */

export default function AddNewUser() {
    const { register, handleSubmit, reset, watch, setValue } = useForm();
    const onSubmit = (data) => {
        setLoginError("");
        reset();
    };
    return (
        <div className="container">
            <div className="lg:px-16 bg-base-200 py-16">
                <div className="mb-10">
                    <h1 className="text-4xl text-center font-bold">Add New Customer</h1>
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
                        <div className="mt-3">
                            <Input
                                label="Password"
                                type="password"
                                rest={{ ...register("password") }}
                                placeholder="Enter your password"
                                className="p-2 w-full border border-white-100 focus:border-primary"
                            />
                        </div>
                        <div className="mt-6">
                            <Button type="submit">Add user</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
