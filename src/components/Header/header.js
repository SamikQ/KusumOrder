import kusumLogo from "./img/logo-header.png"

const Header = () => {
  return (
    <div className="header">
        <img className="header-logo" src={kusumLogo} alt="kusum logo" />
    </div>
  );
};

export default Header;