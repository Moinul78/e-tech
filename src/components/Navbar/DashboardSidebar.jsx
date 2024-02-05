import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * DashboardSidebar component provides a sidebar for the dashboard.
 *
 * @component
 * @example
 * // Example usage of DashboardSidebar
 * <DashboardSidebar />
 *
 * @returns {JSX.Element} - Rendered component.
 */


const navItem = [
    {
        id: 1,
        title: 'Dashboard',
        link: '/dashboard'
    },
    {
        id: 3,
        title: 'Users',
        link: '/dashboard/users'
    },
    {
        id: 4,
        title: 'Products',
        link: '/dashboard/products'
    },
    {
        id: 4,
        title: 'Add Product',
        link: '/addproduct'
    },
    {
        id: 5,
        title: 'Help Center',
        link: '/helpCenter'
    },
    {
        id: 6,
        title: 'Log Out',
        link: '/logout'
    },
]



const DashboardSidebar = () => {
    return (
        <div className='p-5 bg-primary h-full shrink-0 flex'>
            <div>
                <div className="flex flex-col gap-[0.875rem]">
                    {
                        navItem.map((navList) => (
                            <NavLink
                                to={navList.link}
                                key={navList.id}
                                end={false}
                            >
                                {({ isActive }) => (
                                    <div className={`px-[2rem] flex justify-start items-start gap-4 py-3 
                                        ${isActive ? 'sidebar-hover bg-primary2 border-r-4 rounded-tl-[2.5px] rounded-bl-[2.5px] border-primary4 sidebar-hovernone' : 'hover:bg-primary2 '}`}>
                                        <p className={`text-2xl leading-6 font-semibold ${isActive ? 'text-primary4' : 'text-light'}`}>{navList.title}</p>
                                    </div>
                                )}
                            </NavLink>
                        ))

                    }
                </div>
            </div>
        </div>
    );
};


export default DashboardSidebar;

