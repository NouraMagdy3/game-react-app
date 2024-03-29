import React from "react";
import { useSelector, useDispatch } from "react-redux"; //using redux with hooks (functions) not classes
import { useRecoilState } from "recoil";
import { counterState } from "../../recoil/atoms/CounterAtoms"; //using recoil
import Button from "@material-ui/core/Button";

function AllCounters(props) {
  const gamesInCart = useSelector((state) => state.ct.cart); //Redux Cart
  console.log({ gamesInCart });
  const ReduxCounter = useSelector((state) => state.cr.ReduxCounter); //redux counter
  const dispatch = useDispatch(); //redux dispatch
  //dispatch({type: "INCREMENT_COUNTER"}) // this is the exactly how we increment, we put it in button

  const [RecoilCounter, setRecoilCounter] = useRecoilState(counterState);

  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    if (counter >= 10) {
      alert("counter now is above 10");
      setCounter(0);
    }
  }, [counter]);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  // return <h1>This is my cart, {props.hello}</h1>;
  //we don't use this.props (this is only in class);

  return (
    <div className="preview">
      <div className="form-group">
        <h2>
          Counter value is : <span>{counter}</span>
        </h2>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          increase counter
        </Button>
      </div>
      <div className="form-group">
        <h2>
          Redux Counter value is : <span>{ReduxCounter}</span>
        </h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}
        >
          increase counter
        </Button>
      </div>
      <div className="form-group">
        <h2>
          Recoil Counter value is : <span>{RecoilCounter}</span>
        </h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setRecoilCounter(RecoilCounter + 1)}
        >
          increase counter
        </Button>
      </div>
    </div>
  );
}

export default AllCounters;
