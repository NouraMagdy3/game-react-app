import React from "react";
import "./style.css";
import Button from "@material-ui/core/Button";

//third way to add handleSubmit form or add listener to my form using state

class GameForm extends React.Component {
  state = {
    formData: {},
    errors: {},
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let data = this.state.formData;
    console.log({ data });

    const gameObj = {
      id: this.props.gamesData.length,
      name: data["title"],
      genre: data["genre"],
      year: data["year"],
      developer: data["developer"],
    };

    this.props.onSubmit([...this.props.gamesData, gameObj]);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "year" && isNaN(value)) {
      this.setState({
        errors: { ...this.state.errors, [name]: " Year Should be a number" },
      });
    } else {
      this.setState({
        formData: { ...this.state.formData, [name]: value }, //...this.state.formData it's the old value
        errors: {},
      });
    }
  };

  render() {
    return (
      <section>
        <h2>Add New Game </h2>
        <form id="game-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Game Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.formData["title"]}
              onChange={this.handleChange}
              required
            />
            <span>Game title value is : {this.state.formData["title"]}</span>
          </div>
          <div className="form-group">
            <label htmlFor="genre">Game Genre</label>
            <input
              type="text"
              name="genre"
              id="genre"
              value={this.state.formData["genre"]}
              onChange={this.handleChange}
              required
            />
            <span>Game genre value is : {this.state.formData["genre"]}</span>
          </div>
          <div className="form-group">
            <label htmlFor="year">Game Year</label>
            <input
              type="text"
              name="year"
              id="year"
              value={this.state.formData["year"]}
              onChange={this.handleChange}
              required
            />
            <span style={{ color: "red", marginRight: "5px" }}>
              {this.state.errors["year"]}
            </span>
            <span>Game year value is : {this.state.formData["year"]}</span>
          </div>
          <div className="form-group">
            <label htmlFor="developer">Game Developer</label>
            <input
              type="text"
              name="developer"
              id="developer"
              value={this.state.formData["developer"]}
              onChange={this.handleChange}
              required
            />
            <span>
              Game developer value is : {this.state.formData["developer"]}
            </span>
          </div>
          <Button
          variant="contained"
          color="primary" type="submit">Submit New Game 
          </Button>
        </form>
      </section>
    );
  }
}
export default GameForm;
