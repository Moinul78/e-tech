import React from "react";
import { useForm } from 'react-hook-form';
import Input from "../../components/Shared/Inputs/Input";
import Button from "../../components/Shared/Button/Button";
import useGlobal from "../../utils/hooks/useGlobal";
import toast from "react-hot-toast";

/**
 * This component provides a form for adding a new product. It utilizes the react-hook-form library
 * for form handling and validation. Users can input the category, title, and price of the new product.
 * Upon submission, the product information is added to the global state using the setProducts function
 * from the useGlobal hook. A success toast notification is displayed upon successful addition.
 *
 * Features:
 * - Utilizes react-hook-form for form handling and validation.
 * - Adds a new product to the global state using the setProducts function from the useGlobal hook.
 * - Displays success toast notification upon successful product addition.
 * @returns {JSX.Element} - The rendered AddProduct component.
 */

export default function AddProduct() {
    const { register, handleSubmit, reset } = useForm();
    const { setProducts } = useGlobal();

    const onSubmit = (data) => {
        const newProduct = {
            category: { name: data.category },
            title: data.title,
            price: data.price,
        }
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        toast.success("product added succesfully!");
        reset();
    };
    return (
        <div className="container">
            <div className="lg:px-16 bg-base-200 py-16">
                <div className="mb-10">
                    <h1 className="text-4xl text-center font-bold">Add New Proudct</h1>
                </div>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-16 w-full lg:w-[50%] lg:shadow-xl bg-base-100">
                        <div className="mt-3">
                            <Input
                                label="Category"
                                type="text"
                                rest={{ ...register("category") }}
                                placeholder="enter category"
                                className="p-2 w-full border border-white-100 focus:border-primary"
                            />
                            <Input
                                label="Title"
                                type="text"
                                rest={{ ...register("title") }}
                                placeholder="enter title"
                                className="p-2 w-full border border-white-100 focus:border-primary"
                            />

                            <Input
                                label="Price"
                                type="number"
                                rest={{ ...register("price") }}
                                placeholder="enter category"
                                className="p-2 w-full border border-white-100 focus:border-primary"
                            />
                        </div>
                        <div className="mt-6">
                            <Button type="submit">Add Product</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};