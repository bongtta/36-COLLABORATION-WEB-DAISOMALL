import * as S from './PickupInfo.style';
import DeliveryboxIcon from '@assets/svgs/DeliveryboxIcon';
import DeliveryIconTruck from '@assets/svgs/DeliveryIconTruck';
import DeliveryIconCycle from '@assets/svgs/DeliveryIconCycle';
import StoreIcon from '@assets/svgs/StoreIcon';
import NavigationButton from '@components/buttons/navigationButton/NavigationButton';
// import ClockIcon from '@assets/svgs/ClockIcon'; // Clock 아이콘 추가 필요
// import QuestionIcon from '@assets/svgs/QuestionIcon'; // Question 아이콘 추가 필요
// import ArrowRightIcon from '@assets/svgs/ArrowRightIcon'; // ArrowRight 아이콘 추가 필요

const PickupInfo = () => {
  // TODO: 실제 데이터 연동 및 선택 상태 관리 필요
  const selectedMethod: string = 'store'; // 예시: 매장픽업 선택

  return (
    <div css={S.Wrapper}>
      <h2 css={S.Title}>배송방법</h2>
      <div css={S.MethodList}>
        <div 
          css={S.MethodItem} 
          data-selected={selectedMethod === 'delivery'}
        >
          <div css={S.IconWrapper}>
            <DeliveryboxIcon width={20} height={20} />
          </div>
          <span css={S.MethodName}>택배배송</span>
          <span css={S.MethodDate}>4/29(화)<br/>도착예정</span>
        </div>
        <div 
          css={S.MethodItem} 
          data-selected={selectedMethod === 'store'} 
          data-width-wide={true} // '매장픽업'은 너비가 더 넓음
        >
          <div css={S.IconWrapper}>
            <StoreIcon width={20} height={20} />
          </div>
          <span css={S.MethodName}>매장픽업</span>
          <span css={S.MethodDate}>4/28(월)<br/>픽업가능</span>
        </div>
        <div 
          css={S.MethodItem} 
          data-selected={selectedMethod === 'today'}
        >
          <div css={S.BetaTag}>BETA</div>
          <div css={S.IconWrapper}>
            <DeliveryIconCycle width={20} height={20} />
          </div>
          <span css={S.MethodName}>오늘배송</span>
          <span css={S.MethodDate}>4/28(월)<br/>도착예정</span>
        </div>
        <div 
          css={S.MethodItem} 
          data-selected={selectedMethod === 'bulk'}
        >
          <div css={S.IconWrapper}>
            <DeliveryIconTruck width={20} height={20} />
          </div>
          <span css={S.MethodName}>대량주문</span>
          <span css={S.MethodDate}>7일 이내<br/>도착예정</span>
        </div>
      </div>

      <div css={S.InfoSection}>
        <div css={S.InfoRow}>
          <span css={S.InfoLabel}>픽업매장</span>
          <div css={S.InfoContent}>
            <span>
              <a href="#" css={S.LoginLink}>로그인</a> 후 픽업 가능 매장을 확인해보세요
            </span>
          </div>
        </div>
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
        <NavigationButton 
          text="구매 가능 다이소 매장 찾기" 
          to="#"  // 임시 링크
          variant="gray" // NavigationButton의 variant에 따라 적절히 수정
          // fullWidth // 필요시 fullWidth prop 추가
        />
      </div>
    </div>
  );
};

export default PickupInfo;