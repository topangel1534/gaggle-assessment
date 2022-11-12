import TextField from 'components/TextField';
import './index.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="sign-up">
      <div className="sign-up-header">
        <div className="sign-up-left-section">🐣</div>
        <div className="sign-up-control">
          <p className="caption">New Account</p>
          <TextField label="Username" />
          <TextField label="Password" option="Hide" />
          <TextField label="Email" />
        </div>
      </div>
      <div className="sign-up-footer">
        <div>Cancel</div>
        <div>Register Account</div>
      </div>
    </div>
  );
};
