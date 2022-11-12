import { useNavigate } from 'react-router-dom';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from 'components/TextField';

import './index.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <TextField label="Username" />
      <TextField label="Password" option="Hide" />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember"
        />
      </FormGroup>
      <div className="sign-on-button" onClick={() => navigate('/dashboard')}>
        Sign On
      </div>
    </div>
  );
};
