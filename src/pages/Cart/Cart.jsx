import { useDispatch, useSelector } from "react-redux";
import Cancel from '../../assets/Icons/cancel.svg?react';
import { removeCartItem } from "../../store/Reducer/cartSlice";
import toast from "react-hot-toast";


export default function Cart() {
    const cartItems = useSelector((state) => state.cartStore.cart);
    const dispatch = useDispatch();

    const handleCancel = (productId) => {
        dispatch(removeCartItem(productId));
        toast.success("Item Deleted Successfully!!");
    };
    return (
        <div className="container mt-10">
            {cartItems.length > 0 ? (
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Title</th>
                            <th className="text-left">Price</th>
                            <th className="text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td onClick={() => handleCancel(item.id)}>
                                    <Cancel className="w-4 h-4" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10 text-xl font-bold">No Items available</p>
            )}
        </div>
    )
}