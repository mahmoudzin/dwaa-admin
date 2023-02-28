import React from 'react';
import Navbar from './Navbar';
import Tooltip from '../ui/Tooltip';
import Sidebar from './Sidebar';
import {useStateContext} from '../../context/contextProvider'


type PropsType = {
    children?: React.ReactNode;
}
const Layout = ({children}:PropsType) => {
    const context = useStateContext();
    return (
        <>
            <div className="flex relative dark:bg-main-dark-bg">
                <Tooltip/>
                {context?.activeMenu
                ?<div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-50"><Sidebar/></div>
                :<div className="w-0"><Sidebar /></div> }
                <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${context?.activeMenu ? "md:ltr:ml-72 md:rtl:mr-72" : "flex-2"}`}>
                    <Navbar />
                    <div className='mt-12'>
                        <div className="flex flex-wrap lg:flex-nowrap ">
                            <div className="w-full p-8 pt-9 m-3">
                                {children}
                            </div>                                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;