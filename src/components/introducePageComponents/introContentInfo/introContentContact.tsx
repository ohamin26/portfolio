import { MdOutlineAttachEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { PiReadCvLogoThin } from 'react-icons/pi';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import {
  introContentContact,
  introContentContactContainer,
  introContentContactIcon,
  introContentContactLink,
  introContentContactParagragh,
} from './introContentInfo.css';

export const IntroContentContact = () => {
  return (
    <div className={introContentContact}>
      <div className={introContentContactContainer}>
        <span className={introContentContactIcon}>
          <MdOutlineAttachEmail />
        </span>
        <span className={introContentContactParagragh}>ohamin26@gmail.com</span>
      </div>
      <div className={introContentContactContainer}>
        <span className={introContentContactIcon}>
          <FaGithub />
        </span>
        <a className={introContentContactLink} href="https://github.com/ohamin26" target="_blank">
          Github
        </a>
      </div>
      <div className={introContentContactContainer}>
        <span className={introContentContactIcon}>
          <PiReadCvLogoThin />
        </span>
        <a className={introContentContactLink} href="https://ohamin26.tistory.com/" target="_blank">
          Blog
        </a>
      </div>
      <div className={introContentContactContainer}>
        <span className={introContentContactIcon}>
          <LiaBirthdayCakeSolid />
        </span>
        <span className={introContentContactParagragh}>1999.05.23</span>
      </div>
    </div>
  );
};
