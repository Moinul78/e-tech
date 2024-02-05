import React from 'react';
import Table from '../../components/Shared/Table/Table';
import useGlobal from '../../utils/hooks/useGlobal';

const Dashboard = () => {
    const { users } = useGlobal();

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

export default Dashboard;