import React from 'react';
//import gamesData from './data.json';
//using this.props.gamesData instead of gamesData
import generateStyle from './style';
import { renderGameElement } from './utility';
import propTypes from "prop-types";
import { useDispatch } from "react-redux";

function GameCards(props) {

        const dispatch = useDispatch();
        
        const handleAddToCart = (data) => {
           // alert(`have ${data.id} game`);
           dispatch({ type: "ADD_TO_CART", payload: data });
           alert(`${data.id} game added to your cart successfully`);
        }

        const styles= generateStyle({ bgColor: "red" });
        
        const gamesDataJSX = props.gamesData.map(((game) =>
        renderGameElement(game, false, handleAddToCart))
         );

        return ( 
            <div id = "game-cards"
            style= { styles.gameCardsClass } >
             { gamesDataJSX }
             </div>
        );
    }

GameCards.defaultProps = {
    gamesData: []
}
GameCards.propTypes = {
    gamesData: propTypes.array
}
export default GameCards;