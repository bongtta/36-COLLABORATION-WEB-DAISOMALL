/** @jsxImportSource @emotion/react */
import * as S from './PerkInfo.style';

const PerkInfo = () => {
  return (
    <div css={S.container}>
      <div css={S.title}>혜택안내</div>
      <div css={S.contentWrapper}>
        <div css={S.labelColumn}>
          <div css={S.label}>포인트 적립</div>
          <div css={S.label}>결제 혜택</div>
        </div>
        <div css={S.infoColumn}>
          <div css={S.infoText}>0.1% 다이소 포인트 적립</div>
          <div css={S.benefitWrapper}>
            <div css={S.benefitContainer}>
              <div css={S.benefitInfoText}>다이소 삼성카드 다이소몰 이용금액의 1% 할인</div>
              <div css={S.iconContainer}>
                <div css={S.iconBackground} />
                <div css={S.iconOutline} />
                <div css={S.iconContent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerkInfo;
