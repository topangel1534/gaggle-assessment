import './index.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ label, option }) => {
  return (
    <div className="text-field">
      <div className="caption">
        <div className="label">{label}</div>
        <div className="option">{option}</div>
      </div>
      <input type="text" name={label} />
    </div>
  );
};
