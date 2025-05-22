/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import * as S from './NavBar.style';

interface TabInfo {
  id: number;
  title: string;
  count?: number;
}

const NavBar = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs: TabInfo[] = [
    { id: 1, title: '상품설명' },
    { id: 2, title: '리뷰', count: 11747 },
    { id: 3, title: '상품정보' }
  ];

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <nav css={S.container} role="navigation" aria-label="상품 상세 탭">
      {tabs.map(tab => (
        <button
          key={tab.id}
          css={S.tabItem}
          onClick={() => handleTabClick(tab.id)}
          aria-selected={tab.id === activeTab}
          role="tab"
          type="button"
        >
          <span css={S.tabText(tab.id === activeTab)}>
            {tab.title}
            {tab.count !== undefined && ` ${tab.count.toLocaleString()}`}
          </span>
          {tab.id === activeTab && <div css={S.activeBar} />}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;