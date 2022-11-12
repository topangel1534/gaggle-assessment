import TextField from 'components/TextField';
import './index.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="login">
      <TextField label="Username" />
      <TextField label="Password" option="Hide" />
    </div>
  );
};
