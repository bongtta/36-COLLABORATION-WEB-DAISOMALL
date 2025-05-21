import * as S from './PickupInfo.style';
import MethodListSection from './MethodListSection';
import PickupStoreSection from './PickupStoreSection';
import PickupDetailsSection from './PickupDetailsSection';
import NavigationButton from '@components/buttons/navigationButton/NavigationButton';
const PickupInfo = () => {
  // TODO: 실제 데이터 연동 및 선택 상태 관리 필요
  const selectedMethod: string = 'store'; // 예시: 매장픽업 선택

  return (
    <div css={S.Wrapper}>
      <h2 css={S.Title}>배송방법</h2>
      <MethodListSection selectedMethod={selectedMethod} />
      <div css={S.InfoSection}>
        <PickupStoreSection />
        <PickupDetailsSection />
      </div>
      <div css={S.ButtonContainer}>
        <NavigationButton
            text="구매 가능 다이소 매장 찾기"
            to="#" // 임시 링크
            variant="gray" // NavigationButton의 variant에 따라 적절히 수정
            // fullWidth // 필요시 fullWidth prop 추가
        />
      </div>
    </div>
  );
};

export default PickupInfo;