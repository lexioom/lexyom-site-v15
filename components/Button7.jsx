import * as React from "react";
import { PlasmicButton7 } from "./plasmic/lexyom_site_v_1/PlasmicButton7";

function Button7_(props, ref) {
  const { plasmicProps } = PlasmicButton7.useBehavior(props, ref);
  return <PlasmicButton7 {...plasmicProps} />;
}

const Button7 = React.forwardRef(Button7_);

export default Object.assign(Button7, {
  __plumeType: "button"
});
