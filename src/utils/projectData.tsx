import {
  ItemImg,
  ItemImgDocuments,
  ItemImgOverdog,
  ItemImgWashhub,
} from '../components/projectPageComponents/projectPageContent/projectPageContentItem/projectPageContentItem.css';

export const itemData: any = {
  washhub: {
    imgSrc: '/assets/washhub.webp',
    imgClass: ItemImgWashhub,
    titleText: (
      <>
        코인세탁소 길라잡이 플랫폼 <br />
        워시허브
      </>
    ),
  },
  documents: {
    imgSrc: '/assets/documents.png',
    imgClass: ItemImgDocuments,
    titleText: '개인 포트폴리오 프로젝트',
  },
  overdog: {
    imgSrc: '/assets/overdog.png',
    imgClass: ItemImgOverdog,
    titleText: '반려동물 일상 공유 플랫폼',
  },
  alwrite: {
    imgSrc: '/assets/alwrite.png',
    imgClass: ItemImg,
    titleText: (
      <>
        다목적 필기 어플리케이션 <br />
        alwrite
      </>
    ),
  },
  cj: {
    imgSrc: '/assets/cj2.png',
    imgClass: ItemImg,
    titleText: 'CJ 대한통운 미래기술 챌린지 2023',
  },
};
