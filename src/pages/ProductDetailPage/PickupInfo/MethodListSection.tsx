import * as S from './MethodListSection.style';
import DeliveryIconTruck from '@assets/svgs/DeliveryIconTruck';
import DeliveryIconCycle from '@assets/svgs/DeliveryIconCycle';
import StoreIcon from '@assets/svgs/StoreIcon';
import BetaMark from '@assets/svgs/BetaMark';
import BoxIcon from '@assets/svgs/BoxIcon';

const MethodListSection = () => { 
  return (
    <div css={S.MethodList}>
      <div css={S.MethodItem}>

        <div css={S.MethodItemContent}>
          <div css={S.IconWrapper}>
            <DeliveryIconTruck width={20} height={20} />
          </div>
          <span css={S.MethodName}>택배배송</span>
          <span css={S.MethodDate}>4/29(화)<br/>도착예정</span>
        </div>
      </div>

      
      <div css={[S.MethodItem, S.StoreMethodItem]}>
        <div css={S.MethodItemContent}>
          <div css={S.IconWrapper}>
            <StoreIcon width={20} height={20} />
          </div>
          <span css={S.MethodName} className="method-name">매장픽업</span>
          <span css={S.MethodDate} className="method-date">4/28(월)<br/>픽업가능</span>
        </div>
      </div>

      <div css={S.MethodItem}>
        <BetaMark css={S.BetaIconStyle} />
        <div css={S.MethodItemContent}>
          <div css={S.IconWrapper}>
            <DeliveryIconCycle width={20} height={20} />
          </div>
          <span css={S.MethodName}>오늘배송</span>
          <span css={S.MethodDate}>4/28(월)<br/>도착예정</span>
        </div>
      </div>


      <div css={S.MethodItem}>
        <div css={S.MethodItemContent}>
          <div css={S.IconWrapper}>
            <BoxIcon width={20} height={20} />
          </div>
          <span css={S.MethodName}>대량주문</span>
          <span css={S.MethodDate}>7일 이내<br/>도착예정</span>
        </div>
      </div>


    </div>
  );
};

export default MethodListSection; 