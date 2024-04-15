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
        {location.pathname === '/skills' && <PiGearThin className={headerIcon} />}
        {location.pathname === '/project' && <AiOutlineFundProjectionScreen className={headerIcon} />}
      </div>
      <div className={headerParagraph}>
        {location.pathname === '/introduce' && 'About me'}
        {location.pathname === '/skills' && 'Skills'}
        {location.pathname === '/sroject' && 'Project'}
      </div>
    </div>
  );
};
