/** @jsxImportSource @emotion/react */
import {
  wrapper,
  searchBar,
  topRow,
  inputField,
  iconGroup,
  divider,
  explanation,
  explanationText,
} from './StoreSearchBar.style';
import { LocationIcon, SearchIcon } from '@assets/svgs';

const StoreSearchBar = () => (
  <div css={wrapper}>
    <div css={searchBar}>
      <div css={topRow}>
        <input css={inputField} type="text" placeholder="매장명으로 찾기" />
        <div css={iconGroup}>
          <LocationIcon width={24} height={24} />
          <div css={divider} />
          <SearchIcon width={24} height={24} />
        </div>
      </div>
    </div>
    <div css={explanation}>
      <span css={explanationText}>· 실제 매장 재고와 다를 수 있습니다.</span>
      <span css={explanationText}>
        · 내 위치에서 5km 이내 매장 정보를 제공합니다.
      </span>
    </div>
  </div>
);

export default StoreSearchBar;
