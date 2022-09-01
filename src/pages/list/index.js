//this is the old App page

import React from "react";

//import Hello from "../../components/Hello";
import GameCards from "../../components/GameCards/";
import GameForm from "../../components/GameForm/";
//import gameCardsData from './components/GameCards/data.json'
//<GameCards gamesData={gameCardsData}/>  // when passing data from parent to child
import * as gamesServices from "../../services/games";

class List extends React.Component {
  
   /* constructor() {
        super();
        console.log("App is constructing");
      };*/
    
      state = {
        //games: gameCardsData
        games: []
      };
    
      getMyGamesList = async () => {
        try {
          const response = await gamesServices.getAllGames(5);
          const jsonData = await response.json();
          const list = [];
    
          for (let i = 0; i < jsonData.results.length; i++) {
            let game = jsonData.results[i];
            console.log(game);
    
            list.push({
              id: i,
              name: game.title,
              genre: game.producer,
              year: game.release_date,
              developer: game.director
            });
            //console.log(list);
          }
          this.setState({ games: list });
          console.log(this.state.games);

        } catch (error) {
          console.log(error);
        }
      };
    
      updateGameCards = (newgameList) => {
        this.setState({ games: newgameList });
      };
    
      componentDidMount() {
        console.log(`App did mount, We have ${this.state.games.length} games`);
        this.getMyGamesList();
      };
    
      componentDidUpdate() {
        console.log(
          `App did Update(app's state or props updates), We have ${this.state.games.length} games.`
        );
      };


    render(){
        return(
        <div id="list">
        <GameForm
          gamesData={this.state.games}
          onSubmit={this.updateGameCards}
        />
        <GameCards gamesData={this.state.games} />
        </div>
        );
    }

}

export default List;