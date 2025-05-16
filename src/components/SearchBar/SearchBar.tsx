import { useState } from 'react';
import * as S from '@styles/searchBar.styled';
import { SearchIcon, BarcodeIcon, CancelIcon } from '@assets/svgs';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (keyword: string) => void;
  onClear?: () => void;
}

const SearchBar = ({
  placeholder = '검색어를 입력하세요',
  onSearch,
  onClear,
}: SearchBarProps) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue('');
    onClear?.();
  };

  const handleSearch = () => {
    if (value.trim()) onSearch?.(value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div css={S.wrapper}>
      <input
        css={S.input}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />

      <div css={S.iconWrapper}>
        {value === '' ? (
          <>
            <BarcodeIcon css={S.barcodeIcon} width={24} />
            <div css={S.divider} />
          </>
        ) : (
          <button
            type="button"
            onClick={handleClear}
            css={S.clearButton}
            aria-label="입력 초기화"
          >
            <CancelIcon width={14} />
          </button>
        )}

        <button
          type="button"
          onClick={handleSearch}
          css={S.searchButton}
          aria-label="검색"
        >
          <SearchIcon width={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
