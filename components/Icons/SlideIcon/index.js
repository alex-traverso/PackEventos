import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={props}
    height={props}
    viewBox='0 0 109 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width={109} height={18} rx={9} fill={props} />
  </svg>
);
export default SVGComponent;
