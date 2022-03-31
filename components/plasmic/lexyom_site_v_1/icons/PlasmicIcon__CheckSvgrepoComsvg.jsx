// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CheckSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -4 30 30"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <linearGradient
          x1={"50%"}
          y1={"0%"}
          x2={"50%"}
          y2={"100%"}
          id={"kFxCIoeZOa"}
        >
          <stop stopColor={"#1DD47F"} offset={"0%"}></stop>

          <stop stopColor={"#0DA949"} offset={"100%"}></stop>
        </linearGradient>
      </defs>

      <path
        d={
          "M714.443 40.627c.743.795.743 2.06 0 2.855l-16.696 17.891a1.944 1.944 0 01-1.65.614 1.944 1.944 0 01-1.496-.624l-9.044-9.692a2.108 2.108 0 010-2.855 1.938 1.938 0 012.854 0l7.768 8.324 15.41-16.513a1.938 1.938 0 012.854 0z"
        }
        transform={"translate(-685 -40)"}
        fill={"currentColor"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default CheckSvgrepoComsvgIcon;
/* prettier-ignore-end */
