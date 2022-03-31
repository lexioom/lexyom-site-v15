import * as React from "react";
import { PlasmicButton5 } from "./plasmic/lexyom_site_v_1/PlasmicButton5";

function Button5_(props, ref) {
  const { plasmicProps } = PlasmicButton5.useBehavior(props, ref);
  return <PlasmicButton5 {...plasmicProps} />;
}

const Button5 = React.forwardRef(Button5_);

export default Object.assign(Button5, {
  __plumeType: "button"
});
