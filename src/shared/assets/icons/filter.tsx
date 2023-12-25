import { SVGProps, memo, ReactElement } from 'react';
/* eslint-disable */
export const Filter = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} fill="none" {...props}>
      <path
        fill="#A7A7A7"
        fillRule="evenodd"
        d="M2.6 4a.5.5 0 0 1 .5-.5h8.5a.5.5 0 1 1 0 1H3.1a.5.5 0 0 1-.5-.5Zm9 2.5a.5.5 0 0 1 .5.5v4.793l1.646-1.646a.5.5 0 0 1 .708.707l-2.5 2.5a.499.499 0 0 1-.354.146h-.003a.5.5 0 0 1-.35-.146l-2.5-2.5a.5.5 0 0 1 .707-.708l1.646 1.647V7a.5.5 0 0 1 .5-.5Zm-8.5 1a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1H3.1Zm0 4a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1H3.1Z"
        clipRule="evenodd"
        opacity={0.9}
      />
    </svg>
  ),
);
