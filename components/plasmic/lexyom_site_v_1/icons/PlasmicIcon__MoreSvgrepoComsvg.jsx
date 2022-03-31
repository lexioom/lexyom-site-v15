// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MoreSvgrepoComsvgIcon(props) {
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
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M60.952 195.048C27.343 195.048 0 222.391 0 256s27.343 60.952 60.952 60.952 60.952-27.343 60.952-60.952-27.342-60.952-60.952-60.952zm195.048 0c-33.609 0-60.952 27.343-60.952 60.952s27.343 60.952 60.952 60.952 60.952-27.343 60.952-60.952-27.343-60.952-60.952-60.952zm195.048 0c-33.609 0-60.952 27.343-60.952 60.952s27.343 60.952 60.952 60.952S512 289.609 512 256s-27.343-60.952-60.952-60.952z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MoreSvgrepoComsvgIcon;
/* prettier-ignore-end */
