import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

import SignUp from 'components/SignUp';

import './index.scss';

// eslint-disable-next-line import/no-anonymous-default-export

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  boxShadow: 24,
  borderRadius: '3px',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="footer">
      <div className="register" onClick={handleOpen}>
        Register
      </div>
      <div className="vertical-line"></div>
      <div className="forgot-password">Forgot password?</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <SignUp onClose={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
