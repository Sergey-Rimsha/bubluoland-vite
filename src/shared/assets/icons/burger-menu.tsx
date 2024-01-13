import { memo, ReactElement, SVGProps } from 'react';
/* eslint-disable */

export const BurgerMenu = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
      <path
        fill="#363636"
        fillRule="evenodd"
        d="M2.667 16c0-.736.596-1.333 1.333-1.333h24a1.333 1.333 0 0 1 0 2.666H4A1.333 1.333 0 0 1 2.667 16Zm0-8c0-.736.596-1.333 1.333-1.333h24a1.333 1.333 0 1 1 0 2.666H4A1.333 1.333 0 0 1 2.667 8Zm0 16c0-.736.596-1.333 1.333-1.333h24a1.333 1.333 0 0 1 0 2.666H4A1.333 1.333 0 0 1 2.667 24Z"
        clipRule="evenodd"
      />
    </svg>
  ),
);
