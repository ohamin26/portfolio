import { ContentHeader } from '../components/contentHeader/header';
import { IntroContentEdu } from '../components/introducePageComponents/introContentEdu/introContentEdu';
import { IntroContentInfo } from '../components/introducePageComponents/introContentInfo/introContentInfo';
import { ProjectPageContent } from '../components/projectPageComponents/projectPageContent/content/projectPageContent';
import { Header } from '../components/projectPageComponents/projectPageHeader/header';
import LandingPage from '../components/rendingPage/randingPage';
import Sidebar from '../components/sideBar/sideBar';
import { SkillPageInfo } from '../components/skillPageComponets/skillPageInfo';
import { pageContainer, pageContent, pageSideBar, pageWrapper } from '../styles/globalStyle.css';

export const IntroducePage = () => {
  return (
    <div className={pageWrapper}>
      <LandingPage />
      <div className={pageContainer}>
        <div className={pageSideBar}>
          <Sidebar />
        </div>
        <div className={pageContent}>
          <div id="Introduce">
            <ContentHeader title="introduce" />
          </div>
          <IntroContentInfo />
          <IntroContentEdu />
          <div id="Skills">
            <ContentHeader title="skills" />
          </div>
          <SkillPageInfo />
          <div id="Project">
            <ContentHeader title="project" />
          </div>
          <Header />
          <ProjectPageContent />
        </div>
      </div>
    </div>
  );
};
