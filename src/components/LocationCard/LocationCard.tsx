import * as S from './LocationCard.style';
import { HeartIcon, ArrowRightIcon } from '@assets/svgs';
import StoreStatus from '@components/LocationCard/StoreStatus/StoreStatus';
import ProductTag from './ProductTag';

interface LocationCardProps {
  storeName: string;
  distance: string;
  address: string;
  isOpen: boolean;
  time: string;
  floor?: string;
  stand?: string;
  stock?: number;
  isSoldOut?: boolean;
  isFranchise?: boolean;
  isPickupAvailable?: boolean;
}

const LocationCard = ({
  storeName,
  distance,
  address,
  isOpen,
  time,
  floor,
  stand,
  stock,
  isSoldOut = false,
  isFranchise = false,
  isPickupAvailable = false,
}: LocationCardProps) => (
  <div css={S.wrapper}>
    <div css={S.topSection}>
      <div css={S.storeInfo}>
        <div css={S.titleRow}>
          <span css={S.storeName}>{storeName}</span>
          <span css={S.distance}>{distance}</span>
          {isPickupAvailable && <span css={S.pickupBadge}>픽업 가능 매장</span>}
        </div>
        <p css={S.address}>{address}</p>
        <div css={S.statusRow}>
          <StoreStatus isOpen={isOpen} />
          <span css={S.divider} />
          <span css={S.time}>{time}</span>
        </div>
      </div>
      <HeartIcon width={24} height={24} />
    </div>

    {isFranchise ? (
      <div css={S.franchiseNotice}>가맹/유통점은 재고 확인이 어렵습니다.</div>
    ) : (
      <div css={S.bottomSection}>
        <div css={S.tagRow}>
          {floor && <ProductTag type={`${floor}`} />}
          <span css={S.divider} />
          {stand && (
            <>
              <ProductTag type={`${stand}`} />
              <span css={S.standText}>매대</span>
            </>
          )}
          <span css={S.divider} />
          {isSoldOut ? (
            <span css={S.soldOutText}>일시품절</span>
          ) : (
            <>
              <span>재고</span>
              <ProductTag type={`${stock ?? 0}개`} />
            </>
          )}
        </div>
        <button css={S.actionButton}>
          <span>{isSoldOut ? '재입고 알림' : '매장 픽업하기'}</span>
          <ArrowRightIcon width={12} height={12} />
        </button>
      </div>
    )}
  </div>
);

export default LocationCard;
