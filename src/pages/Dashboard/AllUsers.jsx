import React from 'react';
import Table from '../../components/Shared/Table/Table';
import useGlobal from '../../utils/hooks/useGlobal';

/**
 * This component displays a table of all users fetched from the global state using the useGlobal hook.
 * It utilizes the Table component to render the users in a tabular format with specified configurations.
 *
 * Features:
 * - Utilizes the useGlobal hook to access users from the global state.
 * - Configures table columns including names and corresponding keys for user properties.
 * - Renders a Table component with users data, configured columns, and optional features like pagination.
 * @returns {JSX.Element} - The rendered AllUsers component.
 */

export default function AllUsers() {
    const { users } = useGlobal();

    const configData = [
        {
            name: 'Email',
            key: 'email',
        },
        {
            name: "Name",
            key: "name",
        },
        {
            name: "Role",
            key: "role",
        },
    ];

    return (
        <div className='p-5 h-full'>
            <Table
                data={users}
                config={configData}
                showPagination={false}
                serial={true}
            />

        </div>
    );
};
