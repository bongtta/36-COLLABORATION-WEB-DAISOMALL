import * as S from './MethodListSection.style';
import DeliveryboxIcon from '../../../assets/svgs/DeliveryboxIcon';
import DeliveryIconTruck from '../../../assets/svgs/DeliveryIconTruck';
import DeliveryIconCycle from '../../../assets/svgs/DeliveryIconCycle';
import StoreIcon from '../../../assets/svgs/StoreIcon';

interface MethodListSectionProps {
  selectedMethod: string;
  // onSelectMethod: (method: string) => void; // 향후 상태 관리를 위해 추가 고려
}

const MethodListSection = ({ selectedMethod }: MethodListSectionProps) => {
  return (
    <div css={S.MethodList}>
      <div
        css={S.MethodItem}
        data-selected={selectedMethod === 'delivery'}
        // onClick={() => onSelectMethod('delivery')}
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
        data-width-wide={true}
        // onClick={() => onSelectMethod('store')}
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
        // onClick={() => onSelectMethod('today')}
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
        // onClick={() => onSelectMethod('bulk')}
      >
        <div css={S.IconWrapper}>
          <DeliveryIconTruck width={20} height={20} />
        </div>
        <span css={S.MethodName}>대량주문</span>
        <span css={S.MethodDate}>7일 이내<br/>도착예정</span>
      </div>
    </div>
  );
};

export default MethodListSection; 