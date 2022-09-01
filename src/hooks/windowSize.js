//custom hooks

import React from "react";

function Usewindowdimensions() {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); //excute one time , if I don't call it when we open the page the width and height is begin undefined
    window.onresize = handleResize;
   //or window.addEventListener("resize", handleResize); but sometimes this is not working.

  }, []);

  return windowSize;
}

export default Usewindowdimensions;
