import { ContentHeader } from '../components/contentHeader/header';
import { IntroContentEdu } from '../components/introducePageComponents/introContentEdu/introContentEdu';
import { IntroContentInfo } from '../components/introducePageComponents/introContentInfo/introContentInfo';
import { SideBar } from '../components/sideBar/sideBar';
import { introPage, introPageContent } from '../styles/globalStyle.css';

export const IntroducePage = () => {
  return (
    <div className={introPage}>
      <SideBar />
      <div className={introPageContent}>
        <ContentHeader />
        <IntroContentInfo />
        <IntroContentEdu />
      </div>
    </div>
  );
};
