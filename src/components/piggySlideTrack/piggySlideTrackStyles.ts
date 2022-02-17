import { css } from '@emotion/css';
import { Colors } from '../../styles/colors';
import { Fonts } from '../../styles/fonts';

export const piggyContainerStyle = css({
  position: 'relative',
  bottom: 0,
  height: '100%',
});

export const piggyStyle = (isActive?: boolean) => css({
  width: 500,
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: isActive ? 'translate(-50%, 25%) scale(1.07)' : 'translate(-50%, 40%)',
  transition: 'all 0.5s ease',

  ':hover': {
    transform: 'translate(-50%, 25%) scale(1.07)',
  },

  '@media (max-width: 420px)': {
    width: '80%',
    transform: isActive ? 'translate(-50%, 35%) scale(1.07)' : 'translate(-50%, 45%)',
  }
});

export const coinContainerStyle = (isSuccess?: boolean) => css({
  display: isSuccess ? 'none' : 'default',
});

export const dubCoinStyle = (isSuccess?: boolean) => css({
  opacity: isSuccess ? 0 : 1,
  zIndex: isSuccess ? -1 : 'auto',
  transform: 'none',
  width: 150,
  ':hover': {
    cursor: 'pointer',
  }
});

export const gradientBoxStyle = (height: number, isSuccess?: boolean) => css({
  position: 'fixed',
  top: 0,
  background: Colors.Branding.Gradient,
  width: '100%',
  transition: isSuccess ? 'all 0.3s ease' : 'none', 
  height: isSuccess ? '100%' : height + 188,

});

export const messageContainerStyle = css({
  position: 'fixed',
  left: '50%',
  top: '50%',
  width: '100%',
  transform: 'translate(-50%, 0)'
});

export const messageStyle = css({
  ...Fonts.SubHeading.SH6,
  color: Colors.White,
  marginBottom: 12,
});

export const qrCodeContainerStyle = (isShowing?: boolean) => css({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
  transition: 'all 0.8s ease',
  bottom: isShowing ? '45%' : 0,
  opacity: isShowing ? 1 : 0,

  ':hover': {
    cursor: 'pointer',
  },

  '@media (max-width: 420px)': {
    bottom: isShowing ? '35%' : 0,
  },
});

export const qrCodeStyle = css({
  marginBottom: 12,
  width: 200,

  '@media (max-width: 420px)': {
    width: 150,
  },
})