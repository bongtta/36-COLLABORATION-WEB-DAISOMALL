import * as S from './PickupDetailsSection.style';
import PickupTomorrow from '@assets/svgs/PickupTomorrow'; // PickupTomorrow 아이콘 추가
import QuestionCircle from '@assets/svgs/QuestionCircle'; // QuestionCircle 아이콘 추가

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
              <PickupTomorrow width={68.75} height={22} />
            </span>
            <QuestionCircle width={16} height={16} />
          </div>
          <div css={S.TextWithIcon}>
            <span css={S.PickupInfoText}>
              결제 후 상품준비 완료 알림톡(픽업바코드)
              <br />
              24시간 이내 발송, 최대 2일까지 픽업 가능
            </span>
            <QuestionCircle width={16} height={16} />
          </div>
          <div css={S.TextWithIcon}>
            <span>픽업 수수료 200원</span>
            <QuestionCircle width={16} height={16} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PickupDetailsSection; 