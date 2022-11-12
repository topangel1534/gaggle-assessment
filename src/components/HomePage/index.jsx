import Logo from '../../assets/logo--Gaggle.svg';
import Footer from 'components/Footer';
import './index.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="home">
      <div className="home-container">
        <img src={Logo} alt="Logo" className="logo" />

        <Footer />
      </div>
      <div className="hero-image">
        <p>[ For Placement Only ]</p>
      </div>
    </div>
  );
};
