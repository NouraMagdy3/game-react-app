import React from "react";
import { useSelector, useDispatch } from "react-redux"; //using redux with hooks (functions) not classes
import { useSpring, animated, config } from "react-spring";
import Button from "@material-ui/core/Button";
import { renderGameElement } from "../../components/GameCards/utility";

function Cart(props) {
  const gamesInCart = useSelector((state) => state.ct.cart); //Redux Cart
  console.log({ gamesInCart });
  const dispatch = useDispatch(); //redux dispatch
  //dispatch({type: "INCREMENT_COUNTER"}) // this is the exactly how we increment, we put it in button

  const [hello, setHello] = React.useState("Noura");
  const [counter, setCounter] = React.useState(0);

  const [flip, setFlip] = React.useState(false);

  const AnimatedStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(true),
  });

  const handleDeleteFromCart = (data) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: data.id });
  };

  const CartGamesDataJSX = gamesInCart.map((game) =>
    renderGameElement(game, true, handleDeleteFromCart)
  );

  React.useEffect(() => {
    if (counter >= 10) {
      alert("counter now is above 10");
      setCounter(0);
    }
  }, [counter]);

  // return <h1>This is my cart, {props.hello}</h1>;
  //we don't use this.props (this is only in class);

  return (
    <div className="preview">
      <div className="form-group">
        <h2>
          This is <animated.span style={AnimatedStyle}>{hello}</animated.span>
          cart
        </h2>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setHello("eng.Noura");
          }}
        >
          update username
        </Button>
      </div>
      <div className="form-group">{CartGamesDataJSX}</div>
    </div>
  );
}

export default Cart;
