import * as S from './PickupDetailsSection.style';

// import ClockIcon from '@assets/svgs/ClockIcon'; // Clock 아이콘 추가 필요
// import QuestionIcon from '@assets/svgs/QuestionIcon'; // Question 아이콘 추가 필요
// import ArrowRightIcon from '@assets/svgs/ArrowRightIcon'; // ArrowRight 아이콘 추가 필요

const PickupDetailsSection = () => {
  return (
    <>
      <div css={S.InfoRow}>
        <span css={S.InfoLabel}>픽업정보</span>
        <div css={S.InfoContent}>
          <div css={S.TextWithIcon}>
            <span>매장픽업 마감, 지금 결제하면</span>
            <span css={S.HighlightBackground}>
              {/* <ClockIcon width={12} height={12} /> */}
              <span css={S.TempIcon} aria-label="시계 아이콘" /> {/* 임시 아이콘 */}
              <span>4/29(화) 14시</span>
            </span>
            {/* <QuestionIcon width={16} height={16} /> */}
            <span css={S.TempIcon} aria-label="도움말 아이콘" /> {/* 임시 아이콘 */}
          </div>
          <div css={S.TextWithIcon}>
            <span css={S.PickupInfoText}>
              결제 후 상품준비 완료 알림톡(픽업바코드)
              <br />
              24시간 이내 발송, 최대 2일까지 픽업 가능
            </span>
            {/* <QuestionIcon width={16} height={16} /> */}
            <span css={S.TempIcon} aria-label="도움말 아이콘" /> {/* 임시 아이콘 */}
          </div>
          <div css={S.TextWithIcon}>
            <span>픽업 수수료 200원</span>
            {/* <QuestionIcon width={16} height={16} /> */}
            <span css={S.TempIcon} aria-label="도움말 아이콘" /> {/* 임시 아이콘 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PickupDetailsSection; 