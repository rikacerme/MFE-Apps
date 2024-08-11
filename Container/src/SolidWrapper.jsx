import React from 'react';
import { render } from 'solid-js/web';

function SolidWrapper({ solidComponent, ...props }) {
  const container = React.useRef(null);

  React.useEffect(() => {
    render(() => solidComponent(props), container.current);
  }, [solidComponent, props]);

  return <div ref={container} />;
}

export default SolidWrapper;
