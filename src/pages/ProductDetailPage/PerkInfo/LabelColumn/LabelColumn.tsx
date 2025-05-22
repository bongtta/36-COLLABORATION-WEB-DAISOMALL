/** @jsxImportSource @emotion/react */
import * as S from './LabelColumn.style';

interface LabelColumnProps {
  labels: string[];
}

const LabelColumn = ({ labels }: LabelColumnProps) => {
  return (
    <div css={S.labelColumn}>
      {labels.map((label, index) => (
        <div key={index} css={S.label}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default LabelColumn; 