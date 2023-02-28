import * as React from 'react';
import {LoadingButton} from '@mui/lab';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';


const BootstrapDialog = styled(Dialog)(({ theme }:any) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
function BootstrapDialogTitle(props:DialogTitleProps) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme:any) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  const Transition = React.forwardRef(function Transition(
    props:TransitionProps& {
      children: React.ReactElement;
    }, 
    ref:React.Ref<unknown>) {
      return <Slide direction="left" ref={ref} {...props} />;
  });
  
  interface PropsType {
    resetForm:()=>void, 
    open:boolean,
    isFull:boolean, 
    title:string,
    children:React.ReactNode
    handleSubmit:()=>void
    isApiActionLoading:null | string
  }
  


const AppModel = ({resetForm, open,isFull=false, title, children, handleSubmit, isApiActionLoading}:PropsType) =>{
    return <>
        <BootstrapDialog
            fullScreen={isFull}
            fullWidth={true}
            onClose={resetForm}
            aria-labelledby="customized-dialog-title"
            open={open}
            TransitionComponent={Transition}
          >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={resetForm}>
              {title}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Box
                className='py-10'
                component="form"
                sx={{
                  width: "70%",
                  margin: "0 auto"
                }}  
              >
                {children}
              </Box>
            </DialogContent>
            <DialogActions>
              <button className="mr-4 py-2 px-4 border-0 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 rounded-md"  autoFocus onClick={handleSubmit}>
              {isApiActionLoading === "loading" ? "Loading..." : title}
              </button>
            </DialogActions>
          </BootstrapDialog>
    </>
}

export default AppModel