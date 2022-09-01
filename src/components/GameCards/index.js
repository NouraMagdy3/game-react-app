import React from "react";
import Alert from "@mui/material/Alert";
//import gamesData from './data.json';
//using this.props.gamesData instead of gamesData
import generateStyle from "./style";
import { renderGameElement } from "./utility";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";

function GameCards(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    dispatch({ type: "ADD_TO_CART", payload: data });
    alert(`${data.id} game added to your cart successfully`);
    return (
      <Alert severity="success">{`${data.id} game added to your cart successfully`}</Alert>
    );
  };

  const styles = generateStyle({ bgColor: "red" });

  const gamesDataJSX = props.gamesData.map((game) =>
    renderGameElement(game, false, handleAddToCart)
  );

  return (
    <div id="game-cards" style={styles.gameCardsClass}>
      {gamesDataJSX}
    </div>
  );
}

GameCards.defaultProps = {
  gamesData: [],
};
GameCards.propTypes = {
  gamesData: propTypes.array,
};
export default GameCards;
