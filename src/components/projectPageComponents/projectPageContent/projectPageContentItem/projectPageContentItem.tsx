import {
  ItemContainer,
  ItemContentWrapper,
  ItemImg,
  ItemImgDocuments,
  ItemImgOverdog,
  ItemTitle,
} from './projectPageContentItem.css';
import { LuSchool } from 'react-icons/lu';

interface ProjectPageContentItemProps {
  title: string;
}

export const ProjectPageContentItem = ({ title }: ProjectPageContentItemProps) => {
  return (
    <div className={ItemContainer}>
      <div className={ItemContentWrapper}>
        {title === 'documents' && <img className={ItemImgDocuments} src="src\assets\documents.png" alt="" />}
        {title === 'overdog' && <img className={ItemImgOverdog} src="src\assets\overdog.png" alt="" />}
        {title === 'alwrite' && <img className={ItemImg} src="src\assets\alwrite.jpg" alt="" />}
        {title === 'cj' && <img className={ItemImg} src="src\assets\cj.png" alt="" />}
        {title === 'school' && <LuSchool size={170} />}
      </div>
      {title === 'documents' && <span className={ItemTitle}>개인 포트폴리오 프로젝트</span>}
      {title === 'overdog' && <span className={ItemTitle}>반려동물 일상 공유 플랫폼</span>}
      {title === 'alwrite' && (
        <span className={ItemTitle}>
          다목적 필기 어플리케이션 <br />
          alwirte
        </span>
      )}
      {title === 'cj' && <span className={ItemTitle}>CJ 대한통운 미래기술 챌린지 2023</span>}
      {title === 'school' && <span className={ItemTitle}>중고서적 거래 플랫폼</span>}
    </div>
  );
};
