import { ContentHeader } from '../components/contentHeader/header';
import { IntroContentEdu } from '../components/introducePageComponents/introContentEdu/introContentEdu';
import { IntroContentInfo } from '../components/introducePageComponents/introContentInfo/introContentInfo';
import { ProjectPageContent } from '../components/projectPageComponents/projectPageContent/content/projectPageContent';
import { Header } from '../components/projectPageComponents/projectPageHeader/header';
import { SideBar } from '../components/sideBar/sideBar';
import { SkillPageInfo } from '../components/skillPageComponets/skillPageInfo';
import { pageContainer, pageContent, pageSideBar } from '../styles/globalStyle.css';

export const IntroducePage = () => {
  return (
    <div className={pageContainer}>
      <div className={pageSideBar}>
        <SideBar />
      </div>
      <div className={pageContent}>
        <div id="introduce">
          <ContentHeader title="introduce" />
        </div>
        <IntroContentInfo />
        <IntroContentEdu />
        <div id="skills">
          <ContentHeader title="skills" />
        </div>
        <SkillPageInfo />
        <div id="project">
          <ContentHeader title="project" />
        </div>
        <Header />
        <ProjectPageContent />
      </div>
    </div>
  );
};
