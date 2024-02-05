import { useState, useEffect } from "react";

export default function useGlobal() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return {
        users, products
    };
}
