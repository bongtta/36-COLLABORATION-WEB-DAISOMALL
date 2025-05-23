import LocationCard from '@components/LocationCard/LocationCard';
import type { LocationCardDataType } from '@app-types/store';

interface LocationCardListProps {
  stores: LocationCardDataType[];
}

const isStoreOpen = (openingHours: string): boolean => {
  const [start, end] = openingHours.split('~');
  if (!start || !end) return true;

  const now = new Date();
  const [startHour, startMin] = start.split(':').map(Number);
  const [endHour, endMin] = end.split(':').map(Number);

  const startDate = new Date(now);
  startDate.setHours(startHour, startMin, 0, 0);

  const endDate = new Date(now);
  endDate.setHours(endHour, endMin, 0, 0);

  return now >= startDate && now <= endDate;
};

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
        isFranchise={
          store.storeType === 'FRANCHISE' || store.storeType === 'DISTRIBUTION'
        }
        distance={'5km'}
        isOpen={isStoreOpen(store.openingHours)}
      />
    ))}
  </>
);

export default LocationCardList;
