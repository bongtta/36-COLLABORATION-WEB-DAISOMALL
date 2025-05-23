import LocationCard from '@components/LocationCard/LocationCard';
import type { LocationCardDataType } from '@app-types/store';

interface LocationCardListProps {
  stores: LocationCardDataType[];
}

const LocationCardList = ({ stores }: LocationCardListProps) => (
  <>
    {stores.map((store) => (
      <LocationCard
        key={store.storeId}
        storeName={store.storeName}
        address={store.location}
        time={store.openingHours}
        floor={store.floor}
        stand={String(store.shelfNo)}
        stock={store.stockCount}
        isPickupAvailable={store.isPickupAvailable}
        isSoldOut={store.stockStatus === '재고 소진' || store.stockCount === 0}
        isFranchise={false} // API에는 없으므로 기본값 false
        distance={'5km'} // 추후 계산 필요
        isOpen={true}
      />
    ))}
  </>
);

export default LocationCardList;
