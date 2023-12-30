import { SVGProps, memo, ReactElement } from 'react';

/* eslint-disable */

export const DefaultImgBook = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" {...props}>
      <path
        stroke="#363636"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M30.25 14.447H17.125L9.25 7.5 7.5 26.605C7.5 31.815 11 40.5 23.25 40.5S39 31.816 39 26.605C39 24.521 37.833 13 37.25 7.5l-7 6.947Z"
      />
      <path
        stroke="#363636"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 27H3m42 0H33m-16.5 7.5h-12m39 0h-12M23.25 27v3c1 1 3.45 2.4 5.25 0m-5.25 0c-1 1-3.45 2.4-5.25 0"
      />
    </svg>
  ),
);
