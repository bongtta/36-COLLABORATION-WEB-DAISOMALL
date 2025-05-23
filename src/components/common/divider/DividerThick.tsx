import { css } from '@emotion/react';
import theme from '@styles/theme';

const dividerStyle = css`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors['gray-06']};
  border: none;
  margin: 0;
`;

const Divider = () => <hr css={dividerStyle} />;

export default Divider;
