import {
  introContentIntroduce,
  introContentIntroduceContent,
  introContentIntroduceContentIcon,
  introContentIntroduceContentText,
  introContentIntroduceTitle,
} from './introContentInfo.css';

//글자 상태로 관리해야함
export const IntroContentIntroduce = () => {
  return (
    <div className={introContentIntroduce}>
      <span className={introContentIntroduceTitle}>Intoduce</span>
      <div className={introContentIntroduceContent}>
        <div className={introContentIntroduceContentIcon}>🧑‍💻</div>
        <div className={introContentIntroduceContentText}>
          <span>
            <div>지속적인 성장을 지향하는 개발자, 오하민입니다.</div> <br />
            <div>
              끝없는 배움을 통해 다양한 기술들을 습득하고, <br />
              한가지 분야에 있어 깊게 파고드는 것을 좋아합니다.
            </div>
            <br />
            <div>
              다양한 기술들을 학습하고 적용시킬 수 있는 풀스택 <br />
              개발자를 지향합니다.
            </div>
            <br />
            <div>항상 생산성 있는 코드를 만들고자 고민합니다.</div>
            <br />
            <div>
              어떠한 일을 할 때 포기하지 않고 끝까지 고민하는 <br />
              습관를 가지고 있습니다.
            </div>
            <br />
          </span>
        </div>
      </div>
    </div>
  );
};
