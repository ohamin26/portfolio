import { container, paragraph1, paragraph2, img, button } from './content.css';

export const Content = () => {
  return (
    <div className={container}>
      <p className={paragraph1}>지속적인 성장을 지향하는 개발자</p>
      <p className={paragraph2}>오하민 입니다</p>
      <img src="src\assets\documents.png" alt="" className={img} />
      <button className={button}>Enter</button>
    </div>
  );
};
