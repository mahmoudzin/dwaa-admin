import React from 'react';
import { Button, Result } from 'antd';
import { useAppSelector } from '../Hooks';
import {selectReportState} from '../store/report'
const Error = () => {
    
    const {error} = useAppSelector(selectReportState);

    
    return (
        <div className="lds-container">
            {error ?
            <Result
                status={error.statusCode}
                title={error.statusCode !== "500" ? error.statusCode : 'Net Work error'}
                subTitle={error.message}
                extra={error.statusCode === "500" ?
                    <Button type="primary" onClick={() => window.location.reload()}>Try Again</Button>
                    :<Button type="primary">Back home</Button>
                }
            />
        : <></>}
        </div>
    );
};

export default Error;