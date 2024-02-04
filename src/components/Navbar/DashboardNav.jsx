import React from 'react';
import Menu from '../../assets/Icons/Menu.svg?react';
import Cross from '../../assets/Icons/cancel.svg?react';

const DashboardNav = ({ sidebarHandler, isOpen }) => {
    return (
        <div className="flex justify-between text-right p-5 bg-primary">
            <button onClick={sidebarHandler} className=" block md:hidden">
                {isOpen ? <Cross className='fill-white h-4 w-4' /> : <Menu className='stroke-white' />}
            </button>
            <p className="hidden md:block text-white text-xl font-bold">E-Tech</p>
            <div>
                <p className="text-base text-white font-bold">John Doe</p>
            </div>
        </div>
    );
};

export default DashboardNav;
