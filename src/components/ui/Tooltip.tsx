import React from 'react';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { useTranslation } from 'react-i18next';
import {FiSettings} from 'react-icons/fi'


const Tooltip = () => {
    const { t } = useTranslation(); 
    return (
        <div className="fixed ltr:right-4 rtl:left-4 bottom-4" style={{zIndex: 1000}}>
            <TooltipComponent content={t("setting-btn")} position='TopCenter'>
                <button 
                    type='button' 
                    className="text-3xl p-3 hover:bg-light-gray text-white"
                    style={{background: 'blue', borderRadius: '50%'}}
                >
                    <FiSettings/>
                </button>
            </TooltipComponent>
        </div>
    );
};

export default Tooltip;