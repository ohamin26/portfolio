import { FaCameraRetro } from 'react-icons/fa';
import { headerContainer, headerIcon, headerIconWrapper, headerTitle } from './header.css';

export const Header = () => {
  return (
    <div className={headerContainer}>
      <div className={headerIconWrapper}>
        <FaCameraRetro className={headerIcon} />
        <span className={headerTitle}>Gallery</span>
      </div>
    </div>
  );
};
