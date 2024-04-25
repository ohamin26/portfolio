import { ContentHeader } from '../components/contentHeader/header';
import { ProjectPageContent } from '../components/projectPageComponents/projectPageContent/content/projectPageContent';
import { Header } from '../components/projectPageComponents/projectPageHeader/header';
import { SideBar } from '../components/sideBar/sideBar';
import { pageContainer, pageContent, projectPageContent } from '../styles/globalStyle.css';

export const ProjectPage = () => {
  return (
    <div className={pageContainer}>
      <SideBar />
      <div className={pageContent}>
        <ContentHeader />
        <div className={projectPageContent}>
          <Header />
          <ProjectPageContent />
        </div>
      </div>
    </div>
  );
};
