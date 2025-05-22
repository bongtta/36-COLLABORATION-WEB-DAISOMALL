/** @jsxImportSource @emotion/react */
import * as S from './LabelColumn.style';

interface LabelColumnProps {
  labels: string[];
}

const LabelColumn = ({ labels }: LabelColumnProps) => {
  return (
    <aside css={S.labelColumn}>
      {labels.map((label, index) => (
        <span key={index} css={S.label}>
          {label}
        </span>
      ))}
    </aside>
  );
};

export default LabelColumn; 