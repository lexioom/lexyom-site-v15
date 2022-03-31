// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ContractSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#c9e3f7"} d={"M16 0h409.6v512H16z"}></path>

      <g fill={"#78b9eb"}>
        <path d={"M220.8 0h204.8v512H220.8z"}></path>

        <path
          d={
            "M92.8 102.4h256v38.4h-256zm0 76.8h256v38.4h-256zm0 76.8H336v38.4H92.8z"
          }
        ></path>
      </g>

      <g fill={"#3c5d76"}>
        <path
          d={
            "M220.8 102.4h128v38.4h-128zm0 76.8h128v38.4h-128zm0 76.8H336v38.4H220.8z"
          }
        ></path>

        <path
          d={"M496 139.794l-27.154-27.154-262.154 262.158-4.849 32 32-4.849z"}
        ></path>
      </g>
    </svg>
  );
}

export default ContractSvgrepoComsvgIcon;
/* prettier-ignore-end */
