import { IoIosArrowForward } from 'react-icons/io';
import { menuItem, menuItemIcon, menuItemIconArrow, menuItemParagraph } from './sideBar.css';
import { GoPeople } from 'react-icons/go';
import { PiGearThin } from 'react-icons/pi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { PiReadCvLogoThin } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

interface ItemProps {
  text: string;
}

export const Item = ({ text }: ItemProps) => {
  const location = useLocation();

  // 항목에 맞는 아이콘 설정
  const isActive = (path: string, itemText: string) => {
    return location.pathname === path && text === itemText;
  };

  // menuItemParagraph 클래스 동적 설정
  const menuItemParagraphClass =
    isActive('/introduce', 'About me') ||
    isActive('/Skills', 'Skills') ||
    isActive('/Project', 'Project') ||
    isActive('/Blog', 'Blog') ||
    isActive('/Github', 'Github')
      ? menuItemParagraph({ active: 'ActiveBorderBottom' })
      : menuItemParagraph({ active: 'UnActiveBorderBottom' });

  return (
    <div className={menuItem}>
      <div className={menuItemIconArrow}>
        <IoIosArrowForward />
      </div>
      <div className={`${menuItemParagraphClass} ${menuItemParagraph}`}>
        <div className={menuItemIcon}>
          {text === 'Introduce' && <GoPeople />}
          {text === 'Skills' && <PiGearThin />}
          {text === 'Project' && <AiOutlineFundProjectionScreen />}
          {text === 'Blog' && <PiReadCvLogoThin />}
          {text === 'GitHub' && <FaGithub />}
        </div>
        {text}
      </div>
    </div>
  );
};
