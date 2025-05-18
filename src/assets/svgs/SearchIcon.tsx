import type { SVGProps } from 'react';
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11.5" cy="10.5" r="7.5" stroke="#28323C" strokeWidth={1.5} />
    <path stroke="#28323C" strokeWidth={1.5} d="M16 15.5L21.5 21" />
  </svg>
);
export default SvgSearchIcon;
