import { SVGProps, memo, ReactElement } from 'react';
/* eslint-disable */

interface PropsSvg extends SVGProps<SVGSVGElement> {
  color?: string;
}
export const Grid = memo((props: PropsSvg): ReactElement => {
  const { color = '#fff' } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.723 2.875a.648.648 0 0 0-.648.648v5.182c0 .357.29.647.648.647h5.182c.357 0 .647-.29.647-.647V3.523a.648.648 0 0 0-.647-.648H3.723Zm.648 5.182V4.17h3.886v3.887H4.371Zm7.125-5.182a.648.648 0 0 0-.648.648v5.182c0 .357.29.647.648.647h5.181c.358 0 .648-.29.648-.647V3.523a.648.648 0 0 0-.648-.648h-5.181Zm.647 5.182V4.17h3.887v3.887h-3.887Zm-9.068 3.239c0-.358.29-.648.648-.648h5.182c.357 0 .647.29.647.648v5.181c0 .358-.29.648-.647.648H3.723a.648.648 0 0 1-.648-.648v-5.181Zm1.296.647v3.886h3.886v-3.886H4.371Zm7.125-1.295a.648.648 0 0 0-.648.648v5.181c0 .358.29.648.648.648h5.181c.358 0 .648-.29.648-.648v-5.181a.648.648 0 0 0-.648-.648h-5.181Zm.647 5.181v-3.886h3.887v3.886h-3.887Z"
        clipRule="evenodd"
      />
    </svg>
  );
});
