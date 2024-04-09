import { Item } from './item';
import { container, menu, profile, profileImage, profileName } from './sideBar.css';

export const SideBar = () => {
  return (
    <div className={container}>
      <div className={profile}>
        <img className={profileImage} src="src\assets\profile_sub.jpg" alt="profile" />
        <div className={profileName}>오하민's portfolio</div>
      </div>
      <div className={menu}>
        <div>
          <Item text="About me" />
        </div>
        <div>
          <Item text="Skills" />
        </div>
        <div>
          <Item text="Project" />
        </div>
        <div>
          <Item text="Blog" />
        </div>
        <div>
          <Item text="Github" />
        </div>
      </div>
    </div>
  );
};
