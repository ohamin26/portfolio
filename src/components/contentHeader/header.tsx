import { GoPeople } from 'react-icons/go';
import { PiGearThin } from 'react-icons/pi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { header, headerIcon, headerParagraph } from './header.css';

export const ContentHeader = () => {
  const location = useLocation();

  return (
    <div className={header}>
      <div>
        {location.pathname === '/introduce' && <GoPeople className={headerIcon} />}
        {location.pathname === '/Skills' && <PiGearThin className={headerIcon} />}
        {location.pathname === '/Project' && <AiOutlineFundProjectionScreen className={headerIcon} />}
      </div>
      <div className={headerParagraph}>
        {location.pathname === '/introduce' && 'About me'}
        {location.pathname === '/Skills' && 'Skills'}
        {location.pathname === '/Project' && 'Project'}
      </div>
    </div>
  );
};
