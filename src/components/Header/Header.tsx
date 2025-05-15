import { BackIcon, CartIcon, Logo, SearchIcon, TohomeIcon } from '@assets/svgs';
import * as S from './Header.style';
import Divider from '@components/common/divider/Divider';

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
  title,
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
        {showTitle && <p css={S.Title}>{title}</p>}
      </div>
      <div css={S.RightContainer}>
        {showSearchIcon && <SearchIcon css={S.NavIcons} />}
        {showHomeIcon && <TohomeIcon css={S.NavIcons} />}
        {showCartIcon && <CartIcon css={S.NavIcons} />}
      </div>
    </div>
    <Divider />
  </>
);

export default Header;
