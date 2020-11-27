import { React, Component } from "react";

class ReactFormPrac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      location: "India",
      gender: "",
      isVegetarian: true,
      isKosher: false,
      isLactoseFree: false,
    };
  }

  /* You should collect the following information from the user:

First name (text input)
Last name (text input)
Age (number input)
Gender (radio buttons with 2 or more options)
Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.

There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this: */

  handleSubmit = (event) => {
    alert(`
    First Name          : ${this.state.firstName} 
    Last Name           : ${this.state.lastName} 
    Age                 : ${this.state.age} 
    Gender              : ${this.state.gender} 
    Location            : ${this.state.location}
    Dietary Restriction : ${this.state.isVegetarian === true ? "Vegetarian" : ""} ${this.state.isKosher === true ? "Kosher" : ""} ${this.state.isLactoseFree === true ? "Lactose Free" : ""}
    `);
  };

  handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    type === 'checkbox' ? this.setState({ [name] : checked }) : this.setState({ [name] : value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="first name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />

            <br />
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="number"
              placeholder="Age"
              name="age"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />{" "}
            Male
            <br />
            <input
              type="radio"
              placeholder="gender"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
            Female
            <br />
          </label>
          <label>Location:</label>
          <select onChange={this.handleChange} name="location" value= {this.state.location}>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
          </select>
          <br />
          <label>Dietary restrictions: </label>
          <input
            type="checkbox"
            name="isVegetarian"
            checked = {this.state.isVegetarian}
            onChange={this.handleChange}
          /> Vegetarian
          <input
            type="checkbox"
            name="isKosher"
            checked = {this.state.isKosher}
            onChange={this.handleChange}
          />kosher
          <input
            type="checkbox"
            name="isLactoseFree"
            checked = {this.state.isLactoseFree}
            onChange={this.handleChange}
          />Lactose free

          <br />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default ReactFormPrac;
