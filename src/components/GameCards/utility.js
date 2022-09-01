import React from 'react';
import generateStyle from './style';
import './style.css';

const styles = generateStyle();

export const renderGameElement = (gameData, isCart, onClick) => (
  <div className="g-card" key={gameData.id} style = { styles.container } >
    <h3 className="title">Title: {gameData.name}</h3>
    <h4 className="subtitle" style = { styles.gameTitle }>Genre: {gameData.genre}</h4>
    <h4 className="subtitle" style = { styles.gameTitle }>Year: {gameData.year}</h4>
    <h4 className="subtitle" style = { styles.gameTitle }>Developer: {gameData.developer}</h4>
    <button onClick={() => onClick(gameData)} style={ styles.cartBtn }>
    { !isCart ? "Add to cart" : "Delete from cart" }
        </button>
  </div>
);