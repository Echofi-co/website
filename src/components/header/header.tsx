import logo from '../../assets/dub_logo.png';
import { headerContainerStyle, headerLinkContainerStyle, headerLinkStyle } from './headerStyles';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={headerContainerStyle}>
      <img src={logo} width={80} />
      <div className={headerLinkContainerStyle}>
        <Link to="/about" className={headerLinkStyle}>About</Link>
        <Link to="/community" className={headerLinkStyle}>Community</Link>
        <Link to="/careers" className={headerLinkStyle}>Careers</Link>
      </div>
    </div>
  )
}