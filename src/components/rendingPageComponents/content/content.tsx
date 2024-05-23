import { useNavigate } from 'react-router-dom';
import { container, paragraph1, paragraph2, img, button } from './content.css';

export const Content = () => {
  const navigate = useNavigate();

  // 버튼 클릭 이벤트 함수
  // /introduce 페이지로 이동
  const onChangePageIntroduce = () => {
    navigate('/introduce');
  };

  return (
    <div className={container}>
      <p className={paragraph1}>지속적인 성장을 지향하는 개발자</p>
      <p className={paragraph2}>오하민 입니다</p>
      <img src="\assets\documents.png" alt="" className={img} />
      <button className={button} onClick={onChangePageIntroduce}>
        Enter
      </button>
    </div>
  );
};
