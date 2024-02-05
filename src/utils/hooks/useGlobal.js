import { useState, useEffect } from "react";

export default function useGlobal() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://github.com/Moinul78/e-tech/blob/master/src/db/UserData.js');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            try {
                const response = await fetch('https://github.com/Moinul78/e-tech/blob/master/src/db/ProductsData.js');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return {
        users, products, setProducts
    };
}
