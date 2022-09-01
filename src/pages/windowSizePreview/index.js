import React from "react";
import Usewindowdimensions from "../../hooks/windowSize";

function Previewsize() {
  const windowSize = Usewindowdimensions();

  React.useEffect(() => {
    console.log("Window Size is changed!", { windowSize });
  }, [windowSize]);

  return (
    <div className="preview">
      <div className="form-group">
        <h3>
          Window Width is :<span>{windowSize.width}</span>
        </h3>
        </div>
        <div className="form-group">
        <h3>
          Window height is :<span>{windowSize.height}</span>
        </h3>
      </div>
    </div>
  );
}
export default Previewsize;
