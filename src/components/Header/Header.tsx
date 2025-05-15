import { BackIcon, CartIcon, Logo, SearchIcon, TohomeIcon } from '@assets/svgs';
import * as S from './Header.style';

interface HeaderProps {
  title?: string;
  showLogo?: boolean;
  showBackButton?: boolean;
  showTitle?: boolean;
  showSearchIcon?: boolean;
  showHomeIcon?: boolean;
  showCartIcon?: boolean;
}

const Header = ({
  //   Todo: title,
  showLogo = false,
  showBackButton = true,
  showTitle = true,
  showSearchIcon = false,
  showHomeIcon = false,
  showCartIcon = true,
}: HeaderProps) => (
  <>
    <div css={S.Wrapper}>
      <div css={S.LeftContainer}>
        {showLogo && <Logo width={73} />}
        {showBackButton && <BackIcon width={24} />}
        {showTitle && <p css={S.Title}>매장 상품 찾기</p>}
      </div>
      <div css={S.RightContainer}>
        {showSearchIcon && <SearchIcon css={S.NavIcons} />}
        {showHomeIcon && <TohomeIcon css={S.NavIcons} />}
        {showCartIcon && <CartIcon css={S.NavIcons} />}
      </div>
    </div>
  </>
);

export default Header;
