import { skillPageInfoContainer, skillPageInfoItemGap, skillPageInfoParagraph } from './skillPageInfo.css';
import { SkillPageInfoItem } from './skillPageInfoItem';

export const SkillPageInfo = () => {
  return (
    <div className={skillPageInfoContainer}>
      <span className={skillPageInfoParagraph}>FRONT-END</span>
      <div className={skillPageInfoItemGap}>
        <SkillPageInfoItem title="front" />
      </div>
      <span className={skillPageInfoParagraph}>BACK-END</span>
      <div className={skillPageInfoItemGap}>
        <SkillPageInfoItem title="back" />
      </div>
      <span className={skillPageInfoParagraph}>DEVOPS</span>
      <div className={skillPageInfoItemGap}>
        <SkillPageInfoItem title="devOps" />
      </div>
      <span className={skillPageInfoParagraph}>COLLABORATION</span>
      <div className={skillPageInfoItemGap}>
        <SkillPageInfoItem title="collaboration" />
      </div>
    </div>
  );
};
