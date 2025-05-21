import * as S from './HeaderNav.style';

const HeaderNav = () => (
  <nav css={S.Wrapper}>
    <ul css={S.TabList}>
      <li css={S.BasicText}>감사의 달</li>
      <li css={S.SelectedText}>홈</li>
      <li css={S.BasicText}>뷰티핫템</li>
      <li css={S.BasicText}>랭킹</li>
      <div>
        <li css={S.BasicText}>
          신상
          <span css={S.badge}>N</span>
        </li>
      </div>
      <li css={S.BasicText}>기획전</li>
    </ul>
  </nav>
);

export default HeaderNav;
