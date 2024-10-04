import { ProjectPageContentItem } from '../projectPageContentItem/projectPageContentItem';
import { ItemContainer } from './projectPageContent.css';

export const ProjectPageContent = () => {
  return (
    <div className={ItemContainer}>
      <ProjectPageContentItem title="washhub" />
      <ProjectPageContentItem title="documents" />
      <ProjectPageContentItem title="overdog" />
      <ProjectPageContentItem title="alwrite" />
      <ProjectPageContentItem title="cj" />
    </div>
  );
};
