import React from "react";
import './style.css';

//first way to add handleSubmit form or add listener to my form using Onsbmit immediatly (easy way)

class GameForm extends React.Component{
handleSubmit = (event) => {
    event.preventDefault();
    
    let FormDataItems = event.target.elements;
    
    let FormData = {};
    for (let i = 0; i < FormDataItems.length; i++) {
        let name = FormDataItems[i].name; //or id
        let value = FormDataItems[i].value;
        if ( name && name.length > 0 ) //we use this condition because I have a button in my form that without name and value => then it's return "" "" in my elements .. that should I haven't
        FormData[name] = value;
    }
    console.log({FormData});
}

    render() {
        return (
          <section>
            <h2>Add New Game </h2>
            <form id="game-form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Game Title</label>
                <input type="text" name="title" id="title" />
              </div>
              <div className="form-group">
                <label htmlFor="genre">Game Genre</label>
                <input type="text" name="genre" id="genre" required />
              </div>
              <div className="form-group">
                <label htmlFor="date">Game Release Date</label>
                <input type="text" name="date" id="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="developer">Game Developer</label>
                <input type="text" name="developer" id="developer" required />
              </div>
              <button type="submit">Submit New Game</button>
            </form>
          </section>
        );
    }
}
export default GameForm;

