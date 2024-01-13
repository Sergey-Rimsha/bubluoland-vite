import { memo, ReactElement, SVGProps } from 'react';
/* eslint-disable */

interface Props extends SVGProps<SVGSVGElement> {
  active?: 'active';
}

export const Star = memo(
  ({ active, ...restProps }: Props): ReactElement => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...restProps}>
      <path
        fill={active ? '#FFBC1F' : '#FFF'}
        style={{ width: '100%', height: '100%' }}
        stroke="#FFBC1F"
        d="M9.598 8.304 12 2.55l2.402 5.755a.97.97 0 0 0 .817.592l6.23.498-4.745 4.05a.966.966 0 0 0-.313.96l1.45 6.06-5.337-3.249a.97.97 0 0 0-1.008 0l-5.338 3.249 1.451-6.06a.966.966 0 0 0-.313-.96l-4.745-4.05 6.23-.498a.968.968 0 0 0 .817-.592Z"
      />
    </svg>
  ),
);
