import { IntroContentContact } from './introContentContact';
import { introContentContactContainer, introContentInfo, introContentInfoImg } from './introContentInfo.css';
import { IntroContentIntroduce } from './introContentIntroduce';

export const IntroContentInfo = () => {
  return (
    <div className={introContentInfo}>
      <div className={introContentContactContainer}>
        <div>
          <img className={introContentInfoImg} src="src\assets\profile.jpg" alt="" />
          <IntroContentContact />
        </div>
        <IntroContentIntroduce />
      </div>
    </div>
  );
};
