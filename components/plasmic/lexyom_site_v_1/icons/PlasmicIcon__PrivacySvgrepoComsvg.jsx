// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PrivacySvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#424242"}
        d={
          "M24 4c-5.5 0-10 4.5-10 10v4h4v-4c0-3.3 2.7-6 6-6s6 2.7 6 6v4h4v-4c0-5.5-4.5-10-10-10z"
        }
      ></path>

      <path
        fill={"#FB8C00"}
        d={
          "M36 44H12c-2.2 0-4-1.8-4-4V22c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v18c0 2.2-1.8 4-4 4z"
        }
      ></path>

      <circle fill={"#EFEBE9"} cx={"24"} cy={"31"} r={"6"}></circle>

      <circle fill={"#1E88E5"} cx={"24"} cy={"31"} r={"3"}></circle>

      <circle fill={"#fff"} cx={"26"} cy={"29"} r={"1"}></circle>
    </svg>
  );
}

export default PrivacySvgrepoComsvgIcon;
/* prettier-ignore-end */