import * as React from "react";
import { PlasmicButton10 } from "./plasmic/lexyom_site_v_1/PlasmicButton10";

function Button10_(props, ref) {
  const { plasmicProps } = PlasmicButton10.useBehavior(props, ref);
  return <PlasmicButton10 {...plasmicProps} />;
}

const Button10 = React.forwardRef(Button10_);

export default Object.assign(Button10, {
  __plumeType: "button"
});
