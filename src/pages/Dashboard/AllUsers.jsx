import React from 'react';
import Table from '../../components/Shared/Table/Table';
import useGlobal from '../../utils/hooks/useGlobal';

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
