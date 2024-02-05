import React from 'react';
import Table from '../../components/Shared/Table/Table';
import useGlobal from '../../utils/hooks/useGlobal';

/**
 * This component displays a table of all products fetched from the global state using the useGlobal hook.
 * It utilizes the Table component to render the products in a tabular format with specified configurations.
 *
 * Features:
 * - Utilizes the useGlobal hook to access products from the global state.
 * - Configures table columns including names and corresponding keys for product properties.
 * - Renders a Table component with products data, configured columns, and optional features like pagination.
 * @returns {JSX.Element} - The rendered AllProducts component.
 */

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
