import React, {useEffect} from 'react';
import {useStateContext} from '../../context/contextProvider'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../../data/avatar.jpg';
import { Cart, Notification, UserProfile } from '../';
import { useTranslation } from 'react-i18next';


type NavButtonProps = {
    title: string,
    customeFunc(): void,
    icon: React.ReactElement,
    color: string,
    dotColor?:string
}

const NavButton = ({title, customeFunc, icon, color, dotColor}: NavButtonProps) => {
    return (
        <TooltipComponent content={title} position='BottomCenter'>
            <button 
                onClick={customeFunc} 
                style={{color}}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
            <span
                style={{ backgroundColor: dotColor || 'transparent' }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            /> 
                {icon}
            </button>
        </TooltipComponent>
    )
}

const Navbar = () => {
    const context = useStateContext();
    const { t } = useTranslation(); 
    // const {activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize} = context;
    
    useEffect(() => {
        const handeScreenSize = () => context?.setScreenSize(window.innerWidth);
        
        window.addEventListener('resize', handeScreenSize)
        
        handeScreenSize();

        return () => window.removeEventListener('resize', handeScreenSize)
    }, 
    []);
    useEffect(()=>{
        if(context?.screenSize && context?.screenSize  <= 900)
        context?.setActiveMenu(false);
        else
        context?.setActiveMenu(true);
    }, [context?.screenSize]);
    return (
        
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <div className="flex justify-between p-2 md:mx-6 relative">
                
                <div className='flex'>
                    <NavButton 
                        title={t("nav-menu")} 
                        customeFunc={()=> {context?.setActiveMenu((prevActive: any) => !prevActive)}} 
                        icon={<AiOutlineMenu />}
                        color="blue"
                        dotColor=""
                    />
                </div >

                <div className="flex">
                    <NavButton title={t("nav-archive")} customeFunc={() => {context?.handleClick('cart')}} color={'blue'} icon={<FiShoppingCart />} />
                    <NavButton title={t("nav-notification")} dotColor="rgb(254, 201, 15)" customeFunc={() => {context?.handleClick('notification')}} color={'blue'} icon={<RiNotification3Line />} />
                    <TooltipComponent content={t("nav-profile")} position="BottomCenter">
                        <div
                            className="flex flex-row-reverse items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                            onClick={() => {context?.handleClick('userProfile')}}
                        >
                            <img
                                className="rounded-full w-8 h-8"
                                src={avatar}
                                alt="user-profile"
                            />
                            <p>
                            <span className="text-gray-400 text-14">{t('welcome-user')}</span>{' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">
                                Michael
                            </span>
                            </p>
                            <MdKeyboardArrowDown className="text-gray-400 text-14" />
                        </div>
                    </TooltipComponent>

                    {context?.isClicked.cart && <Cart/> }
                    {context?.isClicked.userProfile && <UserProfile/> }
                    {context?.isClicked.notification && <Notification/> }
                </div>
            </div>
        </div>
    );
};

export default Navbar;