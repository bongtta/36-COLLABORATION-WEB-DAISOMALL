import SectionTitle from '@components/common/SectionTitle/SectionTitle';
import * as S from './Review.style';
import RenderStars from './RenderStars';
import Keywords from './Keywords';
import PhotoScrollList from './PhotoScrollList';
import Divider from '@components/common/divider/Divider';
import theme from '@styles/theme';

const Review = () => {
  const averageRating = 4.8;

  // ✅ 테스트용 샘플 이미지 8개
  const photos = Array.from(
    { length: 8 },
    (_, i) =>
      `https://cdn.daisomall.co.kr/file/PD/20231208/mlR3AhMQIUI2AnD9HcML1014695_00_06mlR3AhMQIUI2AnD9HcML.jpg/dims/resize/280/quality/90/format/avif/optimize${i + 1}`,
  );

  return (
    <div css={S.Wrapper}>
      <div css={S.UpperContainer}>
        <SectionTitle
          title1="리뷰"
          title2="123445"
          title2Color="#D70011"
          onClickAll={() => console.log('전체보기 클릭')}
        />

        <div css={S.RatingContainer}>
          <p css={S.averageRating}>{averageRating}</p>
          <RenderStars score={averageRating} />
        </div>

        <div css={S.KeywordContainer}>
          <Keywords label="보습력" description="촉촉해요" percent={66} />
          <Keywords label="자극도" description="보통이에요" percent={40} />
          <Keywords label="흡수력" description="마음에 들어요" percent={84} />
        </div>
      </div>

      <div>
        <Divider />
        <div css={S.MiddleContainer}>
          <SectionTitle
            title1="사진&동영상"
            onClickAll={() => console.log('전체보기 클릭')}
          />
        </div>
        <PhotoScrollList images={photos} />
      </div>

      <Divider height="8px" color={theme.colors['gray-06']} />

      <div css={S.LowerContainer}></div>
    </div>
  );
};

export default Review;
