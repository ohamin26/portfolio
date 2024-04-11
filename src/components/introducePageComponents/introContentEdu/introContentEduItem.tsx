import {
  introContentEduItem,
  introContentEduItemDate,
  introContentEduItemImg,
  introContentEduItemLink,
  introContentEduItemTitle,
} from './introContentEdu.css';

interface ItemProps {
  text: string;
}

export const IntroContentEduItem = ({ text }: ItemProps) => {
  return (
    <div>
      {text === 'highscool' && (
        <div className={introContentEduItem}>
          <img className={introContentEduItemImg} src="src/assets/highschool.webp" alt="" />
          <div className={introContentEduItemTitle}>
            <span>한세사이버보안고등학교 졸업</span>
            <a href="https://hansei.sen.hs.kr/" target="_blank" className={introContentEduItemLink}>
              https://hansei.sen.hs.kr/
            </a>
          </div>
          <span className={introContentEduItemDate}>2014.03.01 ~ 2017.02.22</span>
        </div>
      )}
      {text === 'college' && (
        <div className={introContentEduItem}>
          <img className={introContentEduItemImg} src="src/assets/college.svg" alt="" />
          <div className={introContentEduItemTitle}>
            <span>한국공학대학교 소프트웨어학부 4학년 재학중</span>
            <a href="https://www.tukorea.ac.kr/tukorea/index.do" target="_blank" className={introContentEduItemLink}>
              https://www.tukorea.ac.kr/tukorea/index.do
            </a>
          </div>
          <span className={introContentEduItemDate}>2019.03.01 ~ </span>
        </div>
      )}
      {text === 'gdsc' && (
        <div className={introContentEduItem}>
          <img className={introContentEduItemImg} src="src/assets/gdsc.webp" alt="" />
          <div className={introContentEduItemTitle}>
            <span>GDSC TUK 2기 일반 맴버</span>
            <a
              href="https://gdsc.community.dev/tech-university-of-korea/"
              target="_blank"
              className={introContentEduItemLink}
            >
              https://gdsc.community.dev/tech-university-of-korea/
            </a>
          </div>
          <span className={introContentEduItemDate}>2023.10.16 ~</span>
        </div>
      )}
      {text === 'cj' && (
        <div className={introContentEduItem}>
          <img className={introContentEduItemImg} src="src/assets/cj.png" alt="" />
          <div className={introContentEduItemTitle}>
            <span>CJ대한통운 미래기술 챌린지</span>
          </div>
          <span className={introContentEduItemDate}>2023.07.03 ~ 2023.08.15</span>
        </div>
      )}
    </div>
  );
};
