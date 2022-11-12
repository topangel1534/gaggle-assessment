import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ClearIcon from '@mui/icons-material/Clear';
import './index.scss';
import { useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ label, option }) => {
  const [userInfo, setUserInfo] = useState({ Username: '', Password: '' });
  const [shown, setShown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearContent = (param) => {
    console.log(userInfo, param);
    setUserInfo((prevState) => ({
      ...prevState,
      [param]: '',
    }));
  };

  return (
    <div className="text-field">
      <div className="caption">
        <div className="label">{label}</div>
        {option && (
          <div className="option">
            <div onClick={() => setShown(!shown)}>
              {shown ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
            {shown ? 'Show' : 'Hide'}
          </div>
        )}
      </div>
      <div className="input-field">
        <input
          type={shown && label ? 'password' : 'text'}
          name={label}
          value={userInfo[label]}
          onChange={handleChange}
        />
        <ClearIcon onClick={() => clearContent(label)} />
      </div>
    </div>
  );
};
