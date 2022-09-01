import React from "react";
import './style.css';

//second way to add handleSubmit form or add listener to my form using ref

class GameForm extends React.Component {

    constructor() {
        super();
        this.formRef = React.createRef(); //this is not allowed before super
    }
    componentDidMount() {
        this.addEventToForm();
    }
    addEventToForm() {
        if (this.formRef) {
            this.formRef.current.addEventListener('submit', this.handleSubmit);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let FormDataItems = event.target.elements;

        let FormData = {};
        for (let i = 0; i < FormDataItems.length; i++) {
            let name = FormDataItems[i].name; //or id
            let value = FormDataItems[i].value;
            if (name && name.length > 0) //we use this condition because I have a button in my form that without name and value => then it's return "" "" in my elements .. that should I haven't
                FormData[name] = value;
        }
        console.log({ FormData });
    }

    render() {
        return ( 
            <section>
            <h2>Add New Game </h2>
            <form id="game-form" ref={this.formRef}>
                <div className="form-group">
                <label htmlFor="title">Game Title</label>
                <input type="text" name="title" id="title" />
                </div>
                <div className="form-group">
                <label htmlFor="genre">Game Genre</label>
                <input type="text" name="genre" id="genre" required/>
                </div>
                <div className="form-group">
                <label htmlFor="year">Game Year</label>
                <input type="text" name="year" id="year" required/>
                </div>
                <div className="form-group">
                <label htmlFor="developer">Game Developer</label>
                <input type="text" name="developer" id="developer" required/>
                </div>
                <button type="submit">Submit New Game</button>
            </form>
            </section>
        );
    }
}
export default GameForm;