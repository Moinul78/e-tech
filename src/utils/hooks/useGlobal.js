import { useState, useEffect } from "react";

export default function useGlobal() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/Moinul78/e-tech/master/src/db/UserData.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users data:', error);
            }

            try {
                const response = await fetch('https://raw.githubusercontent.com/Moinul78/e-tech/master/src/db/ProductsData.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products data:', error);
            }
        };

        fetchData();
    }, []);

    return {
        users,
        products,
        setProducts
    };
}
