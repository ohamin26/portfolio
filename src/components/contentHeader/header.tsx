import { GoPeople } from 'react-icons/go';
import { PiGearThin } from 'react-icons/pi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { header, headerIcon, headerParagraph } from './header.css';

interface ContentHeaderProps {
  title: string;
}

export const ContentHeader = ({ title }: ContentHeaderProps) => {
  return (
    <div className={header}>
      <div>
        {title === 'introduce' && <GoPeople className={headerIcon} />}
        {title === 'skills' && <PiGearThin className={headerIcon} />}
        {title === 'project' && <AiOutlineFundProjectionScreen className={headerIcon} />}
      </div>
      <div className={headerParagraph}>
        {title === 'introduce' && 'About me'}
        {title === 'skills' && 'Skills'}
        {title === 'project' && 'Project'}
      </div>
    </div>
  );
};
