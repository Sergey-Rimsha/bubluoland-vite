import { SVGProps, memo, ReactElement } from 'react';
/* eslint-disable */

interface PropsSvg extends SVGProps<SVGSVGElement> {
  color?: string;
}
export const List = memo((props: PropsSvg): ReactElement => {
  const { color = '#fff' } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.284 10c0-.437.354-.792.791-.792h14.25a.792.792 0 0 1 0 1.584H3.075A.792.792 0 0 1 2.284 10Zm0-4.75c0-.437.354-.792.791-.792h14.25a.792.792 0 0 1 0 1.584H3.075a.792.792 0 0 1-.791-.792Zm0 9.5c0-.437.354-.792.791-.792h14.25a.792.792 0 1 1 0 1.584H3.075a.792.792 0 0 1-.791-.792Z"
        clipRule="evenodd"
      />
    </svg>
  );
});
