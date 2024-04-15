import {
  skillPageInfoItemContainer,
  skillPageInfoItemIcon,
  skillPageInfoItemImg,
  skillPageInfoItemImg2,
  skillPageInfoItemImgLogo,
  skillPageInfoItemImgSvg,
  skillPageInfoItemImgText,
  skillPageInfoItemText,
  skillPageInfoItemWapper,
} from './skillPageInfo.css';
import { FaGithub } from 'react-icons/fa';

interface ItemProps {
  title: string;
}

export const SkillPageInfoItem = ({ title }: ItemProps) => {
  return (
    <div>
      {title === 'front' && (
        <div className={skillPageInfoItemContainer}>
          <div className={skillPageInfoItemWapper}>
            <img className={skillPageInfoItemImg} src="src\assets\html.png" alt="" />
            <img className={skillPageInfoItemImg} src="src\assets\css.png" alt="" />
            <img className={skillPageInfoItemImg} src="src\assets\js.png" alt="" />
            <img className={skillPageInfoItemImg2} src="src\assets\ts.png" alt="" />
            <img className={skillPageInfoItemImg} src="src\assets\react.png" alt="" />
            <img className={skillPageInfoItemImgSvg} src="src\assets\next-js.svg" alt="" />
          </div>
          <div className={skillPageInfoItemWapper}>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImgLogo} src="src\assets\tailwind.png" alt="" />
              <span>tailwind</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\vanilla-extract.svg" alt="" />
              <span className={skillPageInfoItemText}>
                vanilla <br /> extract
              </span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\recoil.svg" alt="" />
              <span className={skillPageInfoItemText}>recoil</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\redux.png" alt="" />
              <span className={skillPageInfoItemText}>Redux</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\react_query.svg" alt="" />
              <span className={skillPageInfoItemText}>
                react
                <br />
                query
              </span>
            </div>
          </div>
        </div>
      )}
      {title === 'back' && (
        <div className={skillPageInfoItemContainer}>
          <div className={skillPageInfoItemWapper}>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImgLogo} src="src\assets\python.png" alt="" />
              <span>python</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\node-js.svg" alt="" />
              <span className={skillPageInfoItemText}>nodeJs</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\flask.svg" alt="" />
              <span className={skillPageInfoItemText}>flask</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\pytorch.svg" alt="" />
              <span className={skillPageInfoItemText}>pytorch</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\firebase.png" alt="" />
              <span className={skillPageInfoItemText}>firebase</span>
            </div>
          </div>
        </div>
      )}
      {title === 'devOps' && (
        <div className={skillPageInfoItemContainer}>
          <div className={skillPageInfoItemWapper}>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImgLogo} src="src\assets\Git.png" alt="" />
              <span className={skillPageInfoItemText}></span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\amazon-aws.svg" alt="" />
              <span className={skillPageInfoItemText}></span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\google-cloud.png" alt="" />
              <span className={skillPageInfoItemText}>
                google
                <br />
                cloud
              </span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\docker.png" alt="" />
              <span className={skillPageInfoItemText}>docker</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\GitHub Actions.png" alt="" />
              <span className={skillPageInfoItemText}>
                github
                <br />
                actions
              </span>
            </div>
          </div>
        </div>
      )}
      {title === 'collaboration' && (
        <div className={skillPageInfoItemContainer}>
          <div className={skillPageInfoItemWapper}>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImgLogo} src="src\assets\notion.png" alt="" />
              <span className={skillPageInfoItemText}>Notion</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\slack.png" alt="" />
              <span className={skillPageInfoItemText}>slack</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <FaGithub className={skillPageInfoItemIcon} />
              <span className={skillPageInfoItemText}>github</span>
            </div>
            <div className={skillPageInfoItemImgText}>
              <img className={skillPageInfoItemImg} src="src\assets\figma.png" alt="" />
              <span className={skillPageInfoItemText}>figma</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
