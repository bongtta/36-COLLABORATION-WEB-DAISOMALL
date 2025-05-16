import type { SVGProps } from 'react';
const SvgCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="#374553"
      strokeWidth={1.2}
      d="M4.8002 5.59998H15.2002L16.8002 16.8H3.2002L4.8002 5.59998Z"
    />
    <path
      stroke="#374553"
      strokeWidth={1.2}
      strokeLinecap="round"
      d="M12 7.19998V3.59998C12 2.49541 11.1046 1.59998 10 1.59998V1.59998C8.89543 1.59998 8 2.4954 8 3.59997V7.19998"
    />
  </svg>
);
export default SvgCartIcon;
