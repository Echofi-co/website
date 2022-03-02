import Draggable from 'react-draggable';
import Piggy from '../../assets/piggy.png';
import DubCoin from '../../assets/dub_coin.png';
import QrCode from '../../assets/dub_download_qr.png';
import { 
  coinContainerStyle,
  dubCoinStyle, 
  gradientBoxStyle, 
  messageContainerStyle, 
  messageStyle, 
  piggyContainerStyle, 
  piggyStyle,
  qrCodeContainerStyle,
  qrCodeStyle, 
} from './piggySlideTrackStyles';
import { useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import { ReactComponent as Chevron } from '../../assets/chevron.svg';

export interface Position {
  x: number;
  y: number;
}

export const PiggySlideTrack = () => {
  const { innerHeight: height } = window;

  const [coinPosition, setCoinPosition] = useState<Position>({ x: 0, y: 0 });
  const [didCoinEnter, setDidCointEnter] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [coinEnterPosition, setCoinEnterPosition] = useState<number>(height - 100);

  const piggyPosition = document.getElementById('piggy')?.getBoundingClientRect();

  useEffect(() => {
    if (piggyPosition) {
      setCoinEnterPosition(piggyPosition.top - piggyPosition.height / 2 + 20)
    }
  }, [piggyPosition]);

  const handleDrag = (e: any, ui: { deltaX: number; deltaY: number; }) => {
    const { x, y } = coinPosition;
    setCoinPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
    setIsDragging(true);
  };

  const onStop = () => {
    if (coinPosition.y > coinEnterPosition) {
      setDidCointEnter(true);
    }
    setCoinPosition({ x: 0, y: 0 });
    setIsDragging(false);
  };

  const onPiggyClick = () => {
    setDidCointEnter(false);
  };

  const onQrClick = () => {
    window.open('https://qrcodes.pro/jHtqzf', '_blank');
  };

  return (
    <div>
      
      <div className={messageContainerStyle}>
        <div className={messageStyle}>Slide the coin down for a dub</div>
        <Chevron />
      </div>
      <div className={gradientBoxStyle(coinPosition.y, didCoinEnter)} />
      <div className={qrCodeContainerStyle(didCoinEnter)} onClick={onQrClick}>
        <img src={QrCode} className={qrCodeStyle} alt="qrcode" />
        <div className={messageStyle}>Scan or click me</div>
      </div>
      <div className={piggyContainerStyle}>
        <img id="piggy" src={Piggy} className={piggyStyle(isDragging)} draggable="false" onClick={onPiggyClick} alt="piggy" />
      </div>
      <Draggable 
        axis="y" 
        position={{x: 0, y: coinPosition.y}} 
        onStop={onStop}
        onDrag={handleDrag}
        defaultClassName={coinContainerStyle(didCoinEnter)}
      >
        <img 
          draggable="false" 
          className={cx(dubCoinStyle(didCoinEnter), 'handle')} 
          src={DubCoin} 
          alt="coin" 
        />
      </Draggable>
      
    </div>
  );
}