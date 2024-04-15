import { ContentHeader } from '../components/contentHeader/header';
import { SideBar } from '../components/sideBar/sideBar';
import { SkillPageInfo } from '../components/skillPageComponets/skillPageInfo';
import { pageContainer, pageContent } from '../styles/globalStyle.css';

export const SkillPage = () => {
  return (
    <div className={pageContainer}>
      <SideBar />
      <div className={pageContent}>
        <ContentHeader />
        <SkillPageInfo />
      </div>
    </div>
  );
};
