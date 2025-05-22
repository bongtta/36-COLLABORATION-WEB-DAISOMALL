/** @jsxImportSource @emotion/react */
import * as S from './InfoColumn.style';
import SvgQuestionCircle from '@assets/svgs/QuestionCircle';

interface BenefitInfo {
  text: string;
  hasIcon?: boolean;
}

interface InfoColumnProps {
  pointInfo: string;
  benefitInfo: BenefitInfo[];
}

const InfoColumn = ({ pointInfo, benefitInfo }: InfoColumnProps) => {
  return (
    <div css={S.infoColumn}>
      <div css={S.infoText}>{pointInfo}</div>
      <div css={S.benefitWrapper}>
        {benefitInfo.map((benefit, index) => (
          <div key={index} css={S.benefitContainer}>
            <div css={S.benefitInfoText}>{benefit.text}</div>
            {benefit.hasIcon && (
              <div css={S.iconContainer}>
                <SvgQuestionCircle />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoColumn; 