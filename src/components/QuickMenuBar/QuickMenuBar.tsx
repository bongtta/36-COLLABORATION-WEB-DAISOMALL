import * as S from './QuickMenuBar.style';
import {
  SnsIcon,
  StoreSearchIcon,
  PickupIcon,
  HolidayArrivalIcon,
  DeliveryIcon,
} from '@assets/svgs';

interface QuickMenuItem {
  icon: React.ReactNode;
  label: string;
}

const QUICK_MENUS: QuickMenuItem[] = [
  { icon: <SnsIcon />, label: 'SNS핫템' },
  { icon: <StoreSearchIcon />, label: '매장재고' },
  { icon: <PickupIcon />, label: '매장픽업' },
  { icon: <HolidayArrivalIcon />, label: '휴일도착' },
  { icon: <DeliveryIcon />, label: '정기배송' },
];

const QuickMenuBar = () => (
  <div css={S.wrapper}>
    {QUICK_MENUS.map((item, idx) => (
      <button css={S.menuItem} key={idx}>
        <div css={S.icon}>{item.icon}</div>
        <span css={S.label}>{item.label}</span>
      </button>
    ))}
  </div>
);

export default QuickMenuBar;
