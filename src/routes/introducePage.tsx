import { ContentHeader } from '../components/contentHeader/header';
import { IntroContentEdu } from '../components/introducePageComponents/introContentEdu/introContentEdu';
import { IntroContentInfo } from '../components/introducePageComponents/introContentInfo/introContentInfo';
import { SideBar } from '../components/sideBar/sideBar';
import { pageContainer, pageContent } from '../styles/globalStyle.css';

export const IntroducePage = () => {
  return (
    <div className={pageContainer}>
      <SideBar />
      <div className={pageContent}>
        <ContentHeader />
        <IntroContentInfo />
        <IntroContentEdu />
      </div>
    </div>
  );
};
