import { useState } from 'react';
import * as S from './FilterTabs.style';
import { css } from '@emotion/react';
import { XIcon } from '@assets/svgs';

export type FilterOption =
  | 'like-store'
  | 'pickup-able'
  | 'no-soldout'
  | 'no-store';

interface FilterOptions {
  key: FilterOption;
  label: string;
}

interface FilterTabsProps {
  onChange?: (selectedOptions: FilterOption[]) => void;
}

const FilterTabs = ({ onChange }: FilterTabsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);

  const filterOptions: FilterOptions[] = [
    { key: 'like-store', label: '관심 매장' },
    { key: 'pickup-able', label: '픽업 가능 매장' },
    { key: 'no-soldout', label: '일시품절 제외' },
    { key: 'no-store', label: '가맹/유통점 제외' },
  ];

  const handleFilterClick = (option: FilterOption) => {
    let newSelectedOptions: FilterOption[];

    if (selectedOptions.includes(option)) {
      newSelectedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      newSelectedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(newSelectedOptions);
    onChange?.(newSelectedOptions);
  };

  const isSelected = (option: FilterOption) => selectedOptions.includes(option);

  return (
    <div css={S.filterTabsContainer}>
      {filterOptions.map(({ key, label }) => (
        <div
          key={key}
          data-option={key}
          data-selected={isSelected(key)}
          css={css`
            ${S.filterTab}
            ${isSelected(key) && S.selectedFilterTab}
          `}
          onClick={() => handleFilterClick(key)}
        >
          <div
            css={css`
              ${S.filterTabText}
              ${isSelected(key) && S.selectedFilterTabText}
            `}
          >
            {label}
          </div>
          {isSelected(key) && (
            <div css={S.iconWrapper}>
              <XIcon />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterTabs;
