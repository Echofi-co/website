import { css } from '@emotion/css';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

export const headerContainerStyle = css({
  height: '90px',
  padding: '10px 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  zIndex: 10,

  '@media (max-width: 550px)': {
    flexDirection: 'column',
    justifyContent: 'normal',
  },
});

export const headerLinkContainerStyle = css({
  '@media (max-width: 550px)': {
    marginTop: 12,
  },
});

export const headerLinkStyle = css({
  ...Fonts.SubHeading.SH6,
  ...Fonts.Links.default,
  margin: '0 20px',
  color: Colors.White,
  transition: 'all 0.2s ease',
  ':hover': {
    color: Colors.Gray.Gray4,
  },

  '@media (max-width: 700px)': {
    ...Fonts.SubHeading.SH8,
  },
});