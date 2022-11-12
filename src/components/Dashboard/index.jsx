import ReplayIcon from '@mui/icons-material/Replay';
import AppsIcon from '@mui/icons-material/Apps';
import WarningIcon from '@mui/icons-material/Warning';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

import Logo from 'assets/logo--Gaggle.svg';

import './index.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="logo-section">
          <AppsIcon fontSize="large" />
          <img src={Logo} alt="Company Logo" className="logo" />
        </div>
        <div className="dashboard-header-content">
          <WarningIcon color="warning" />
          <div className="register">Save unsuccessful.</div>
          <div className="vertical-line"></div>
          <ReplayIcon color="primary" />
          <div className="forgot-password">Retrying...</div>
        </div>
      </div>
      <div className="dashboard-toolbox">
        <div className="toolbox-left">
          <div className="tool-item">
            <SearchIcon color="action" />
            <ChevronRightIcon />
          </div>
          <div className="tool-item">
            <CloudUploadIcon color="action" />
            <ChevronRightIcon />
          </div>
          <div className="tool-item">
            <ReceiptLongIcon color="action" />
            <ChevronRightIcon />
          </div>
        </div>
        <div className="toolbox-right">
          <div className="filter-item">
            <FilterAltIcon />
            <p>Find...</p>
          </div>
          <div className="tool-item">
            <SystemUpdateAltIcon />
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <p>This is dashboard</p>
    </div>
  );
};
