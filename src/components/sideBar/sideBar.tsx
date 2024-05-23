import { Item } from './item';
import { container, menu, menuButton, menuLink, profile, profileImage, profileName } from './sideBar.css';
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {
  const navigete = useNavigate();
  const OnClickNavigate = (path: string) => {
    navigete(path);
  };
  return (
    <div className={container}>
      <div className={profile}>
        <img className={profileImage} src="src\assets\profile_sub.jpg" alt="profile" />
        <div className={profileName}>오하민's portfolio</div>
      </div>
      <div className={menu}>
        <button className={menuButton} onClick={() => OnClickNavigate('/introduce')}>
          <Item text="About me" />
        </button>
        <button className={menuButton} onClick={() => OnClickNavigate('/skills')}>
          <Item text="Skills" />
        </button>
        <button className={menuButton} onClick={() => OnClickNavigate('/project')}>
          <Item text="Project" />
        </button>
        <a className={menuLink} href="https://ohamin26.tistory.com/" target="_blank">
          <Item text="Blog" />
        </a>
        <a className={menuLink} href="https://github.com/ohamin26" target="_blank">
          <Item text="Github" />
        </a>
      </div>
    </div>
  );
};
