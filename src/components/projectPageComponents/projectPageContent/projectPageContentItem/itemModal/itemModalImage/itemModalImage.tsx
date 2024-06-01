import { SetStateAction, useEffect, useState } from 'react';
//@ts-ignore
import ItemCarousel from 'react-items-carousel';
import {
  ItemModalImg,
  ItemModalImgButton,
  ItemModalImgButtonSize,
  ItemModalImgContainer,
  ItemModalImgDocuments,
} from './itemModalImage.css';
import { CiCircleChevLeft } from 'react-icons/ci';
import { CiCircleChevRight } from 'react-icons/ci';

interface ItemModalImageProps {
  title: string;
}

export const ItemModalImage = ({ title }: ItemModalImageProps) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numOfCards, setNumOfCards] = useState(2);
  const [gutter, setGutter] = useState(28);
  const [imgData, setImgData] = useState<{ name: string; pic: string }[]>([]);

  const resize = () => {
    // window 사이즈 변경되었을 때 실행되는 함수
    const width = window.innerWidth;
    if (title === 'documents') {
      setNumOfCards(1);
    } else {
      if (width < 1300) {
        setNumOfCards(1);
        setGutter(14);
      } else {
        setNumOfCards(2);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  useEffect(() => {
    title === 'overdog'
      ? setImgData([
          { name: '1', pic: '/assets/overdog/banner.webp' },
          { name: '2', pic: '/assets/overdog/main.webp' },
          { name: '3', pic: '/assets/overdog/detail.webp' },
          { name: '4', pic: '/assets/overdog/comment.webp' },
          { name: '5', pic: '/assets/overdog/comment_regist.webp' },
          { name: '6', pic: '/assets/overdog/comment_more_regist.webp' },
          { name: '7', pic: '/assets/overdog/comment_more.webp' },
          { name: '8', pic: '/assets/overdog/profile.webp' },
        ])
      : title === 'documents'
        ? (setNumOfCards(1),
          setImgData([
            { name: '1', pic: '/assets/documents/banner.webp' },
            { name: '2', pic: '/assets/documents/about_me.webp' },
            { name: '3', pic: '/assets/documents/skill.webp' },
            { name: '4', pic: '/assets/documents/project.webp' },
            { name: '5', pic: '/assets/documents/project_detail.webp' },
          ]))
        : title === 'cj'
          ? setImgData([
              { name: '1', pic: '/assets/cj/data.webp' },
              { name: '2', pic: '/assets/cj/result_pic.webp' },
              { name: '3', pic: '/assets/cj/result.webp' },
            ])
          : '';
  }, [title]);

  return (
    <div>
      <ItemCarousel
        chevronWidth={0}
        gutter={gutter}
        numberOfCards={numOfCards}
        slidesToScroll={numOfCards}
        firstAndLastGutter={false}
        outsideChevron={true}
        showSlither={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={(value: SetStateAction<number>) => setActiveItemIndex(value)}
        rightChevron={
          <button className={ItemModalImgButton}>
            <div className={ItemModalImgButtonSize}>
              <CiCircleChevRight />
            </div>
          </button>
        }
        leftChevron={
          <button className={ItemModalImgButton}>
            <div className={ItemModalImgButtonSize}>
              <CiCircleChevLeft />
            </div>
          </button>
        }
      >
        {imgData.map((data) => {
          return (
            <div key={data.name} className={ItemModalImgContainer}>
              {title === 'documents' ? (
                <img src={data.pic} alt="" className={ItemModalImgDocuments} />
              ) : (
                <img src={data.pic} alt="" className={ItemModalImg} />
              )}
            </div>
          );
        })}
      </ItemCarousel>
    </div>
  );
};
