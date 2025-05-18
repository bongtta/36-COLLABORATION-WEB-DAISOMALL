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

interface QuickMenuBarProps {
  onStoreSearchClick?: () => void;
  onHolidayArrivalClick?: () => void;
}

const QUICK_MENUS: QuickMenuItem[] = [
  { icon: <SnsIcon />, label: 'SNS핫템' },
  { icon: <StoreSearchIcon />, label: '매장재고' },
  { icon: <PickupIcon />, label: '매장픽업' },
  { icon: <HolidayArrivalIcon />, label: '휴일도착' },
  { icon: <DeliveryIcon />, label: '정기배송' },
];

const QuickMenuBar = ({
  onStoreSearchClick,
  onHolidayArrivalClick,
}: QuickMenuBarProps) => (
  <div css={S.wrapper}>
    {QUICK_MENUS.map((item, idx) => {
      const handleClick =
        item.label === '매장재고'
          ? onStoreSearchClick
          : item.label === '휴일도착'
            ? onHolidayArrivalClick
            : undefined;

      return (
        <button css={S.menuItem} key={idx} onClick={handleClick} type="button">
          <div css={S.icon}>{item.icon}</div>
          <span css={S.label}>{item.label}</span>
        </button>
      );
    })}
  </div>
);

export default QuickMenuBar;
