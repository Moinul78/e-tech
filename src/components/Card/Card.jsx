import React from 'react';
import useFetch from '../../utils/hooks/useFetch';
import Loading from '../../pages/Loading/Landing';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/Reducer/cartSlice';
import useGlobal from '../../utils/hooks/useGlobal';

export default function Card() {
    const { loading } = useFetch();
    const { products } = useGlobal();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartStore.cart);

    const handleAddToCart = (product) => {
        console.log('Before dispatch:', cartItems);
        dispatch(addToCart(product));
        console.log('After dispatch:', cartItems);
    };

    const extractImageFromData = (data) => {
        // Extract the first image URL from the images array
        if (data.images && data.images.length > 0) {
            return data.images[0];
        }
    };

    return (
        <div className="container mx-auto mt-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                    <Loading />
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="bg-white p-8 rounded shadow-md">
                            <img src={extractImageFromData(product)} alt={product.title} className="mb-4 rounded-md h-36 w-full " />
                            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                            <p className="text-gray-600 mb-4">{product.description.length > 100 ? product.description.slice(0, 100) + '...' : product.description}</p>
                            <p className="text-blue-500 font-bold">${product.price}</p>
                            <button onClick={() => handleAddToCart(product)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full">Add to Cart</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
