import React from 'react';
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {links} from '../../data/links'
import {NavLink} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useStateContext} from '../../context/contextProvider'

const Sidebar = () => {
    const { t } = useTranslation();
    
    const context = useStateContext();
    

    const handleCloseSidebar = () => {
        if(context?.screenSize && context?.screenSize <= 900 && context?.activeMenu){
            context?.setActiveMenu(false);
        }
    }

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 bg-black';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 bg';
    
    return (
            <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10" >
                {context?.activeMenu 
                && 
                <>
                    <div className="flex justify-between items-center">
                        <NavLink 
                            to="/" 
                            className="items-center flex gap-3 ml-3 text-xl mt-4 font-extrabold tracking-tight dark:text-white text-slate-900"
                            onClick={()=> handleCloseSidebar}
                        > 
                            <SiShopware/>
                            <span>{t("sb-title")}</span>
                        </NavLink>
                        <TooltipComponent content="Menu" position="BottomCenter">
                            <button 
                                className="md:hidden text-xl p-3 rounded-full hover:bg-light-gray mt-4 block" 
                                type="button" 
                                onClick={()=> context?.setActiveMenu(false)}
                            >
                                <MdOutlineCancel/>
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="mt-10">
                        {links.map(item => (
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 uppercase mt-4">
                                    {item.title}
                                </p>
                                {
                                    item.links.map(link => 
                                    <NavLink 
                                    onClick={handleCloseSidebar}
                                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                        to={link.href}
                                        key={link.name} 
                                    >
                                        <span>{link.icon}</span>
                                        <p className="uppercase">{link.name}</p>
                                    </NavLink>    
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </> 
                } 
            </div>
    );
};

export default Sidebar;