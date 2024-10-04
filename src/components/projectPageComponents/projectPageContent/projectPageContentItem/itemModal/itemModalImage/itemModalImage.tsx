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
import { imgDataMap } from '../../../../../../utils/modalImgData';

interface ItemModalImageProps {
  title: string;
}

export const ItemModalImage = ({ title }: ItemModalImageProps) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numOfCards, setNumOfCards] = useState(1);
  const [gutter, setGutter] = useState(28);
  const [imgData, setImgData] = useState<{ name: string; pic: string }[]>([]);

  const resize = () => {
    const width = window.innerWidth;
    if (title === 'documents') {
      setNumOfCards(1);
    } else if (title === 'washhub') {
      setNumOfCards(1);
    } else {
      if (width < 1300) {
        setNumOfCards(1);
        setGutter(14);
      } else {
        setNumOfCards(1);
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
    const selectedData = imgDataMap[title];
    if (selectedData) {
      if (selectedData.numOfCards !== undefined) {
        setNumOfCards(selectedData.numOfCards);
      }
      setImgData(selectedData.data);
    }
  }, [title]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex((prevIndex) => (prevIndex === imgData.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [imgData.length]);

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
              {title === 'documents' || title === 'alwrite' || title === 'washhub' ? (
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
