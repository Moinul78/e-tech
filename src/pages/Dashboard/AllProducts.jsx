import React from 'react';
import Table from '../../components/Shared/Table/Table';
import useGlobal from '../../utils/hooks/useGlobal';

export default function AllProducts() {
    const { products } = useGlobal();

    const configData = [
        {
            name: 'Category',
            key: 'category.name',
        },
        {
            name: "Price",
            key: "price",
        },
        {
            name: "Title",
            key: "title",
        },
    ];

    return (
        <div className='p-5 h-full'>
            <Table
                data={products}
                config={configData}
                showPagination={false}
                serial={true}
            />
        </div>
    );
};
