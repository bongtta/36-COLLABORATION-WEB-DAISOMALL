import { MenuIcon, StarIconRed, ThumbUpIcon } from '@assets/svgs';
import * as S from './Comment.style';

const Comment = () => {
  return (
    <div css={S.Wrapper}>
      <div css={S.FirstContainer}>
        <div css={S.FirstLeftContainer}>
          <div>
            <img />
            <p css={S.BodyTextStyle}>lhe***</p>
          </div>
          <div css={S.MiddleSection}>
            <StarIconRed width={11} height={11} />
            <p css={S.CaptionTextStyle}>5점 | 2025-05-01</p>
          </div>
        </div>
        <MenuIcon width={24} height={24} />
      </div>

      <div css={S.SecondContainer}>
        <div css={S.KeywordsContainer}>
          <p css={S.KeyText}>보습력</p>
          <p css={S.ValueText}>촉촉해요</p>
        </div>
        <div css={S.KeywordsContainer}>
          <p css={S.KeyText}>자극도</p>
          <p css={S.ValueText}>순해요</p>
        </div>
        <div css={S.KeywordsContainer}>
          <p css={S.KeyText}>흡수력</p>
          <p css={S.ValueText}>마음에 들어요</p>
        </div>
      </div>

      <div css={S.ThirdContainer}>
        <p css={S.Review}>
          매일 100을 쓰고 한 번씩 300, 500 번갈아가면서 씁니다~ 흡수 도와주는
          홈케어 기기보다 100쓰는게 더 나아요!ㅎ 시간도 더 짧고 효과도 더 좋은
          듯해서 손이 너무 잘갑니다~^^
        </p>
        <p css={S.More}>더보기</p>
      </div>

      <div css={S.ButtonContainer}>
        <div css={S.LeftSection}>
          <p css={S.ButtonText}>도움돼요</p>
        </div>
        <div css={S.RightSection}>
          <ThumbUpIcon width={16} height={16} />
          <p css={S.CaptionTextStyle2}>1</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
