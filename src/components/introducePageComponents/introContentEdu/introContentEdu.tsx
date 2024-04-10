import { introContentEduContainer, introContentEduTitle } from './introContentEdu.css';
import { IntroContentEduItem } from './introContentEduItem';

export const IntroContentEdu = () => {
  return (
    <div className={introContentEduContainer}>
      <div className={introContentEduTitle}>Education && Activities</div>
      <div>
        <IntroContentEduItem text="highscool" />
        <IntroContentEduItem text="college" />
        <IntroContentEduItem text="gdsc" />
        <IntroContentEduItem text="cj" />
      </div>
    </div>
  );
};
