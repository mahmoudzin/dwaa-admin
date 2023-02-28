
import React from 'react';

const useModelState = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return {open, setOpen, handleClickOpen, handleClose} 
}
export default useModelState