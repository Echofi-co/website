import logo from '../../assets/dub_logo.png';
import { headerContainerStyle, headerLinkContainerStyle, headerLinkStyle } from './headerStyles';

export const Header = () => {
  return (
    <div className={headerContainerStyle}>
      <img src={logo} width={80} alt="logo" />
      <div className={headerLinkContainerStyle}>
        <a 
          href="https://echofi.notion.site/dub-Company-Overview-f00ee0b8728f4e8f828dfafa303c319d"
          target="_blank"  
          className={headerLinkStyle}
          rel="noreferrer"
        >
          About
        </a>
        <a 
          href="https://discord.gg/psQwyWEj"
          target="_blank" 
          className={headerLinkStyle}
          rel="noreferrer"
        >
          Community
        </a>
        <a 
          href="https://www.notion.so/echofi/dub-Careers-1f9675d6ef1c474fa12efe1a0ac5c4de"
          target="_blank" 
          className={headerLinkStyle}
          rel="noreferrer"
        >
          Careers
        </a>
      </div>
    </div>
  )
}