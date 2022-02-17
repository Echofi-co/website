import { Header } from '../../components/header/header';
import { PiggySlideTrack } from '../../components/piggySlideTrack/piggySlideTrack';
import { homePageContainerStyle } from './homePageStyles';

export const HomePage = () => {
  return (
    <div className={homePageContainerStyle}>
      <Header />
      <PiggySlideTrack />
    </div>
  )
}