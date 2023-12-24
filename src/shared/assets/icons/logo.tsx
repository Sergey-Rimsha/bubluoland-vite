import { SVGProps, memo, ReactElement } from 'react';

export const Logo = memo(
  (props: SVGProps<SVGSVGElement>): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" {...props}>
      <rect
        width={17.775}
        height={3.878}
        x={3.435}
        y={23.101}
        fill="url(#a)"
        rx={1.939}
        transform="rotate(-90 3.435 23.1)"
      />
      <rect
        width={13.412}
        height={2.909}
        x={8.145}
        y={23.101}
        fill="url(#b)"
        rx={1.454}
        transform="rotate(-90 8.145 23.1)"
      />
      <rect
        width={16.159}
        height={5.009}
        x={17.839}
        y={23.101}
        fill="url(#c)"
        rx={2.505}
        transform="rotate(-90 17.84 23.1)"
      />
      <rect
        width={20.037}
        height={5.171}
        x={11.861}
        y={23.101}
        fill="#FF5253"
        rx={2.585}
        transform="rotate(-90 11.86 23.1)"
      />
      <rect
        width={17.775}
        height={2.909}
        x={23.657}
        y={23.101}
        fill="#FF5253"
        rx={1.454}
        transform="rotate(-90 23.657 23.1)"
      />
      <rect width={26.823} height={2.424} x={1.588} y={24.512} fill="#FF5253" rx={1.212} />
      <defs>
        <linearGradient id="a" x1={12.002} x2={4.129} y1={15.89} y2={44.509} gradientUnits="userSpaceOnUse">
          <stop stopColor="#F83600" />
          <stop offset={0.586} stopColor="#F9D423" />
        </linearGradient>
        <linearGradient id="b" x1={14.609} x2={8.735} y1={17.693} y2={39.175} gradientUnits="userSpaceOnUse">
          <stop stopColor="#F83600" />
          <stop offset={0.586} stopColor="#F9D423" />
        </linearGradient>
        <linearGradient id="c" x1={25.628} x2={12.145} y1={13.787} y2={48.281} gradientUnits="userSpaceOnUse">
          <stop stopColor="#F83600" />
          <stop offset={0.586} stopColor="#F9D423" />
        </linearGradient>
      </defs>
    </svg>
  ),
);
