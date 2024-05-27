import { IntroContentContact } from './introContentContact';
import {
  introContentContactWrapper,
  introContentContainer,
  introContentInfo,
  introContentInfoImg,
} from './introContentInfo.css';
import { IntroContentIntroduce } from './introContentIntroduce';

export const IntroContentInfo = () => {
  return (
    <div className={introContentInfo}>
      <div className={introContentContainer}>
        <div className={introContentContactWrapper}>
          <img className={introContentInfoImg} src="\assets\profile.jpg" alt="" />
          <IntroContentContact />
        </div>
        <IntroContentIntroduce />
      </div>
    </div>
  );
};
