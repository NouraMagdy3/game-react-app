import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, multipliedCounterSelector } from "../../recoil/atoms/CounterAtoms";
import { useSpring, animated, config } from "react-spring";

function RecoilCounter(props) {
  const RecoilCounter = useRecoilState(counterState);
  const multipliedCounter = useRecoilValue(multipliedCounterSelector);

  const [setCounterFlip] = React.useState(false);

  const { number: CounterAnimatedStyle } = useSpring({
    from: { number: 0 },
    number: multipliedCounter,
    delay: 200,
    config: config.molasses,
    onRest: () => setCounterFlip(true),
  });

  return (
    <div className="preview">
      <div className="form-group">
        <h2>
          Recoil Counter value is : <span>{RecoilCounter}</span>
        </h2>
      </div>
      <div className="form-group">
        <h2>
          Multiplied Counter ({RecoilCounter} * 10) is :
          <animated.span>
            {CounterAnimatedStyle.to((n) => n.toFixed(2))}
          </animated.span>
        </h2>
      </div>
    </div>
  );
}

export default RecoilCounter;
