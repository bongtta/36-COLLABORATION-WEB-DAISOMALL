import { css } from '@emotion/react';
import theme from '@styles/theme';

const dividerStyle = css`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors['gray-05']};
  border: none;
  margin: 0;
`;

const Divider = () => <hr css={dividerStyle} />;

export default Divider;