import { css } from '@emotion/react';

const dividerStyle = css`
  width: 100%;
  height: 1px;
  background-color: #ebe9ee;
  border: none;
  margin: 0;
`;

const Divider = () => <hr css={dividerStyle} />;

export default Divider;
