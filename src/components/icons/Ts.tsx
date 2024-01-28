import * as React from "react";
import type { SVGProps } from "react";
const SvgTs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M20 5H5v15h15zm-8.923 13H9.823v-4.956H8.026v-1.033h4.848v1.033h-1.797zm7.212-1.785c0 1.187-.921 1.939-2.415 1.939-1.432 0-2.337-.685-2.407-1.748l-.005-.066h1.208l.004.041c.046.449.532.752 1.233.752.668 0 1.129-.32 1.129-.78v-.005c0-.394-.295-.614-1.038-.768l-.63-.128c-1.246-.254-1.781-.835-1.781-1.743v-.005c0-1.112.954-1.847 2.283-1.847 1.398 0 2.22.74 2.299 1.74l.004.053h-1.179l-.008-.05c-.07-.427-.486-.726-1.116-.726-.619.004-1.03.287-1.03.735v.004c0 .39.29.623.996.768l.635.128c1.266.262 1.818.768 1.818 1.702z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTs;
