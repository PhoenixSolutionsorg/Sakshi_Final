import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import { clinicServices } from '../../../services/Admin/clinicService';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RemoveClinic() {
  const [open, setOpen] = React.useState(false);
  const [clinicId, setClinicId] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    const data = { id: clinicId };
    const result = await clinicServices.removeClinic(data);
    setOpen(false);
    if (result.success) {
      toast("Clinic removed...!!!");
    }
    else
      toast.warning("Clinic-not removed");

  };
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div>
      <ToastContainer className="toast-position"
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Button onClick={handleClickOpen} style={{ color: "black", marginLeft: "15px" }} >
        Remove Clinic
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          value={clinicId}
          onChange={e => {
            setClinicId(e.target.value)
          }}
          label="Enter ID"
          type="text"
          fullWidth
          variant="standard"
        />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOk}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}