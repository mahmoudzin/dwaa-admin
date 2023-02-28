import React from 'react';

type PropsType = {
    title: string,
}

const Header = ({title}: PropsType) => {
    return (
        <div className="mb-10">
            <p className="text-3xl font-extrabold tracking-tight text-slate-900">{title}</p>
        </div>
    );
};

export default Header;